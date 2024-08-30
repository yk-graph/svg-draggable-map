/*
  - 実装内容
    - PCで動作するための event（mousemove | mouseup）のみ対応
*/

import React, { useState, useRef, useCallback, useMemo, useEffect } from "react";

import * as styles from "./pconly.css";

interface Position {
  x: number;
  y: number;
}

const ZOOM_LEVELS = [0.5, 1, 1.5, 2.5];

export default function Index() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 }); // SVG コンテンツの現在の位置を保持する | ドラッグ操作やキーボード操作によって更新される | この値は SVG の transform 属性に使用され、コンテンツの位置を制御する
  const [startPosition, setStartPosition] = useState<Position>({ x: 0, y: 0 }); // ドラッグ操作の開始位置を保持する | マウスダウンイベントが発生したときに設定される | ドラッグ中の新しい位置を計算するために使用する
  const [isDragging, setIsDragging] = useState<boolean>(false); // svgMap上で onMouseDownイベント がgenerateされる -> handle関数(handleMouseDown) がtriggerされる -> 「Drag中」と判定 -> isDragging true となる
  const [zoomIndex, setZoomIndex] = useState<number>(1);
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  const svgRef = useRef<SVGSVGElement>(null);

  const currentZoom = ZOOM_LEVELS[zoomIndex];

  // svgMap上で onMouseDownイベント がgenerateされたタイミングでtriggerされるhandler関数 -> svgMap以外ではtriggerされない
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      e.preventDefault();
      setIsDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    },
    [position]
  );

  // svgMap上で onMouseDownイベント がgenerateされたときに useEffect内で記述しているhandler関数(handleGlobalMouseMove)がtriggerされてMouseEventを受け取る
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      });
    },
    [isDragging, startPosition]
  );

  // useEffect内の handleGlobalMouseUp関数 がtriggerされたとき(ドラッグ中のとき)にドラッグ中かどうかのステータスをfalseに変更する
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoomIndex((prev) => Math.min(prev + 1, ZOOM_LEVELS.length - 1));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleSeatClick = useCallback((e: React.MouseEvent<SVGRectElement>) => {
    const seatId = e.currentTarget.id;
    alert(`座席 ${seatId} がクリックされました`);
    setSelectedSeats((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(seatId)) {
        newSet.delete(seatId);
      } else {
        newSet.add(seatId);
      }
      return newSet;
    });
  }, []);

  /* triggerされる条件(第3引数に指定している監視対象の変数・関数)
    1. handleMouseMove -> svgMap上で onMouseDownイベント がgenerateされたとき
    2. handleMouseUp -> handleMouseUp関数自体はuseEffectが動作しているときにしかtriggerされない
    3. isDragging -> 
  */
  useEffect(() => {
    console.log("useEffect!!! isDragging is ... ", isDragging);

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMouseMove(e);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    // コンポーネント内で mousemove | mouseup のイベントがgenerateされたらhandle関数がtriggerされる
    window.addEventListener("mousemove", handleGlobalMouseMove); // mousemove ->ユーザーがマウスポインタを要素の上で動かすたびに発生(マウスが動いている間、連続的に発生 | マウスの位置情報を取得できる)
    window.addEventListener("mouseup", handleGlobalMouseUp); // mouseup -> ユーザーがマウスボタンを離したときに発生(マウスボタンが押されてから離されたときに1回だけ発生 | ドラッグ操作の終了を検出できる)

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const svgStyle = useMemo(
    () => ({
      transform: `translate(${position.x}px, ${position.y}px) scale(${currentZoom})`,
      transition: isDragging ? "none" : "all cubic-bezier(0.8, 0, 0.2, 1) 0.5s",
      cursor: isDragging ? "grabbing" : "grab",
    }),
    [position.x, position.y, currentZoom, isDragging]
  );

  return (
    <div className={styles.container}>
      <div>
        <p>
          Position *SVGコンテンツの現在の位置 | X軸 : {position.x} | Y軸 : {position.y}
        </p>
        <p>
          startPosition *ドラッグ操作の開始位置 | X軸 : {startPosition.x} | Y軸 : {startPosition.y}
        </p>
      </div>
      <div className={styles.mapContainer}>
        <svg
          ref={svgRef}
          width="1200"
          height="1200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
          style={svgStyle}
          onMouseDown={handleMouseDown}
        >
          <g transform="translate(480,480)">
            {/* <!-- 1行目 --> */}
            <rect
              id="rect1"
              x="0"
              y="0"
              width="40"
              height="40"
              fill={selectedSeats.has("rect1") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect2"
              x="60"
              y="0"
              width="40"
              height="40"
              fill={selectedSeats.has("rect2") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect3"
              x="120"
              y="0"
              width="40"
              height="40"
              fill={selectedSeats.has("rect3") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect4"
              x="180"
              y="0"
              width="40"
              height="40"
              fill={selectedSeats.has("rect4") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />

            {/* <!-- 2行目 --> */}
            <rect
              id="rect5"
              x="0"
              y="60"
              width="40"
              height="40"
              fill={selectedSeats.has("rect5") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect6"
              x="60"
              y="60"
              width="40"
              height="40"
              fill={selectedSeats.has("rect6") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect7"
              x="120"
              y="60"
              width="40"
              height="40"
              fill={selectedSeats.has("rect7") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect8"
              x="180"
              y="60"
              width="40"
              height="40"
              fill={selectedSeats.has("rect8") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />

            {/* <!-- 3行目 --> */}
            <rect
              id="rect9"
              x="0"
              y="120"
              width="40"
              height="40"
              fill={selectedSeats.has("rect9") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect10"
              x="60"
              y="120"
              width="40"
              height="40"
              fill={selectedSeats.has("rect10") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect11"
              x="120"
              y="120"
              width="40"
              height="40"
              fill={selectedSeats.has("rect11") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect12"
              x="180"
              y="120"
              width="40"
              height="40"
              fill={selectedSeats.has("rect12") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />

            {/* <!-- 4行目 --> */}
            <rect
              id="rect13"
              x="0"
              y="180"
              width="40"
              height="40"
              fill={selectedSeats.has("rect13") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect14"
              x="60"
              y="180"
              width="40"
              height="40"
              fill={selectedSeats.has("rect14") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect15"
              x="120"
              y="180"
              width="40"
              height="40"
              fill={selectedSeats.has("rect15") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
            <rect
              id="rect16"
              x="180"
              y="180"
              width="40"
              height="40"
              fill={selectedSeats.has("rect16") ? "yellow" : "blue"}
              onClick={handleSeatClick}
            />
          </g>
        </svg>
        <div className={styles.zoomControls}>
          <button className={styles.zoomButton} onClick={handleZoomOut} disabled={zoomIndex === 0}>
            -
          </button>
          <button className={styles.zoomButton} onClick={handleZoomIn} disabled={zoomIndex === ZOOM_LEVELS.length - 1}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
