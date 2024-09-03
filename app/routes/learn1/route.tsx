/* svgの挙動を理解するページ
  viewport
    - SVGの世界を見るための窓
    - 今回のケースでは mapContainerRef のDOM（mapContainerRefのマップ表示領域）に該当する
  viewbox
    - 窓の中にSVGのどこからどこまでを収めるか を指定するプロパティ
    - x: 表示領域の左上隅のx座標
    - y: 表示領域の左上隅のy座標
    - width: 表示領域の幅
    - height: 表示領域の高さ
    - SVGタグの width と height 属性は、SVGが実際に表示される物理的なサイズを定義します
  - position
    - SVGの現在の位置を表す -> SVGをドラッグするたびに値が更新されるように制御
      - x: SVGの水平方向の位置（左からの距離）
      - y: SVGの垂直方向の位置（上からの距離）
  - startPosition
    - ドラッグ開始時のマウス位置とSVGの位置の差分を保存
  transform : translate :
  transform : scale     :
  transition: 
*/

import { useEffect, useRef, useState } from "react";

import * as styles from "./_styles/index.css";

interface Props {
  width: number;
  height: number;
  className?: string;
}

export default function learn1Page({ width = 600, height = 800, className }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [clientPosition, setClientPosition] = useState({ x: 0, y: 0 }); // これは検証用のため本来は不要
  const [isDragging, setIsDragging] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    // これは検証用のため本来は不要
    setClientPosition({ x: e.clientX, y: e.clientY });

    const newX = e.clientX - startPosition.x;
    const newY = e.clientY - startPosition.y;

    setPosition({
      x: Math.min(0, Math.max(newX, 400 - width)),
      y: Math.min(0, Math.max(newY, 400 - height)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startPosition]);

  return (
    <div className={styles.root}>
      <section className={styles.section}>
        <h2>400x400のviewportに600x800のSVGを描画する</h2>

        {/* <div className={styles.info}>
          <p>positionはSVGの現在の位置を表す | 値はマイナスになる</p>
          <p>position X | SVG画像の左上を0として、どれくらいX軸を移動したかをマイナスで表す | {position.x}</p>
          <p>position Y | SVG画像の左上を0として、どれくらいY軸を移動したかをマイナスで表す | {position.y}</p>
          <hr />
          <p>
            MouseEventが生成された時点でのマウスポインタの座標 |
            ビューポート（ブラウザウィンドウの表示領域）の左端を基準にする
          </p>
          <p>client X | {clientPosition.x}</p>
          <p>client Y | {clientPosition.y}</p>
          <hr />
          <p>ドラッグ操作の開始時点におけるマウスポインタの位置と、SVG要素の現在位置との相対的な関係を表す</p>
          <p>ドラッグ開始 : handleMouseDown 関数によりマウスポインタとSVGの左上角との差分を記録</p>
          <p>
            ドラッグ開始 : handleMouseMove 関数により現在のマウス位置からstartPositionを引くことでSVGの新しい位置を計算
          </p>
          <p>startPosition X | {startPosition.x}</p>
          <p>startPosition Y | {startPosition.y}</p>
        </div> */}

        <div ref={mapContainerRef} className={styles.mapContainer} onMouseDown={handleMouseDown}>
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.svgStyle} ${className}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          >
            <rect width="600" height="800" fill="#5A5E73" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M302 180H298V200H300C167.452 200 60 468.629 60 800H540C540 468.629 432.548 200 300 200H302V180Z"
              fill="#D9D9D9"
            />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 470 740)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 410 740)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 740)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 740)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 230 740)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 170 740)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 470 680)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 410 680)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 680)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 680)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 230 680)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 170 680)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 470 620)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 410 620)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 620)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 620)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 230 620)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 170 620)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 470 560)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 410 560)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 560)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 560)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 230 560)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 170 560)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 470 500)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 410 500)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 500)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 500)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 230 500)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 170 500)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 470 440)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 410 440)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 440)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 440)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 230 440)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 170 440)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 410 380)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 380)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 380)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 230 380)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 410 320)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 320)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 320)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 230 320)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 350 260)" fill="white" />
            <rect width="40" height="40" transform="matrix(-1 0 0 1 290 260)" fill="white" />
          </svg>
        </div>
      </section>
    </div>
  );
}
