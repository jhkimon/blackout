import { useState, useCallback } from "react";

export const useDraggable = (scrollerRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = useCallback((e) => {
    if (!scrollerRef.current) return;

    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollerRef.current.scrollLeft);

    e.preventDefault(); // 기본 동작 방지
  }, [scrollerRef]);

  const onMouseMove = useCallback(
    (e) => {
      if (!isDragging || !scrollerRef.current) return;

      const dx = e.clientX - startX; // 드래그 거리
      scrollerRef.current.scrollLeft = scrollLeft - dx; // 스크롤 업데이트

      e.preventDefault(); // 기본 동작 방지
    },
    [isDragging, startX, scrollLeft, scrollerRef]
  );

  const onMouseUpOrLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp: onMouseUpOrLeave,
    onMouseLeave: onMouseUpOrLeave,
  };
};
