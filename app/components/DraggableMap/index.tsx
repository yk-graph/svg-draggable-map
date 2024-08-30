import { forwardRef, useEffect, useState } from "react";
import { SvgShipMap } from "../SvgShipMap";

import * as styles from "./styles.css";

interface Point {
  x: number;
  y: number;
}

export const DraggableMap = forwardRef<HTMLDivElement>((ref, _) => {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = ref as React.RefObject<HTMLDivElement>;

    if (container.current) {
      const containerWidth = container.current.clientWidth;
      const containerHeight = container.current.clientHeight;
      setPosition({
        x: (containerWidth - 198) / 2,
        y: (containerHeight - 407) / 2,
      });
    }
  }, [ref]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;

      setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={styles.svgContainer}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: "198px",
        height: "407px",
      }}
      onMouseDown={handleMouseDown}
    >
      <SvgShipMap />
    </div>
  );
});
