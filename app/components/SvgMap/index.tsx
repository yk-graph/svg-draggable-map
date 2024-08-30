import { forwardRef, ForwardRefRenderFunction, useMemo } from "react";
import * as styles from "./styles.css";

interface Position {
  x: number;
  y: number;
}

interface Props {
  position: Position;
  selectedSeats: Set<string>;
  isDragging: Boolean;
  currentZoom: number;
  handleSeatClick: (e: React.MouseEvent<SVGRectElement> | React.TouchEvent<SVGRectElement>) => void;
}

const SvgMap: ForwardRefRenderFunction<SVGSVGElement, Props> = (
  { position, selectedSeats, isDragging, currentZoom, handleSeatClick },
  svgRef
) => {
  const svgStyle = useMemo(
    () => ({
      transform: `translate(${position.x}px, ${position.y}px) scale(${currentZoom})`,
      transition: isDragging ? "none" : "all cubic-bezier(0.8, 0, 0.2, 1) 0.5s",
      cursor: isDragging ? "grabbing" : "grab",
    }),
    [position.x, position.y, currentZoom, isDragging]
  );

  return (
    <svg
      ref={svgRef}
      width="1200"
      height="1200"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      style={svgStyle}
    >
      <g transform="translate(500,500)">
        {/* <!-- 1行目 --> */}
        <rect
          id="rect1"
          x="0"
          y="0"
          width="40"
          height="40"
          fill={selectedSeats.has("rect1") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect2"
          x="60"
          y="0"
          width="40"
          height="40"
          fill={selectedSeats.has("rect2") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect3"
          x="120"
          y="0"
          width="40"
          height="40"
          fill={selectedSeats.has("rect3") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect4"
          x="180"
          y="0"
          width="40"
          height="40"
          fill={selectedSeats.has("rect4") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
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
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect6"
          x="60"
          y="60"
          width="40"
          height="40"
          fill={selectedSeats.has("rect6") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect7"
          x="120"
          y="60"
          width="40"
          height="40"
          fill={selectedSeats.has("rect7") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect8"
          x="180"
          y="60"
          width="40"
          height="40"
          fill={selectedSeats.has("rect8") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
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
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect10"
          x="60"
          y="120"
          width="40"
          height="40"
          fill={selectedSeats.has("rect10") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect11"
          x="120"
          y="120"
          width="40"
          height="40"
          fill={selectedSeats.has("rect11") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect12"
          x="180"
          y="120"
          width="40"
          height="40"
          fill={selectedSeats.has("rect12") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
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
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect14"
          x="60"
          y="180"
          width="40"
          height="40"
          fill={selectedSeats.has("rect14") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect15"
          x="120"
          y="180"
          width="40"
          height="40"
          fill={selectedSeats.has("rect15") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
        <rect
          id="rect16"
          x="180"
          y="180"
          width="40"
          height="40"
          fill={selectedSeats.has("rect16") ? "yellow" : "blue"}
          onClick={handleSeatClick}
          onTouchEnd={handleSeatClick}
        />
      </g>
    </svg>
  );
};

export default forwardRef(SvgMap);
