import { useState, useEffect, useCallback, RefObject } from "react";

// 상수 정의
const TRANSITION_DURATION_MS = 300;
const TRANSITION_TIMING = "ease-in-out";

interface SwipeState {
  startY: number | null;
  isDragging: boolean;
  thresholdReached: boolean;
}

interface useSwipeToCloseSheetProps {
  swipeRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  threshold: number;
  onClose: () => void;
}

const useSwipeToCloseSheet = ({
  swipeRef,
  containerRef,
  threshold,
  onClose,
}: useSwipeToCloseSheetProps) => {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    startY: null,
    isDragging: false,
    thresholdReached: false,
  });

  const updateContainerTransform = useCallback(
    (diff: number) => {
      const content = containerRef.current;
      if (!content) return;

      content.style.transform = `translateY(${diff}px)`;
      content.style.transition = "none";
    },
    [containerRef]
  );

  const resetContainerTransform = useCallback(() => {
    const content = containerRef.current;
    if (!content) return;

    content.style.transform = "";
    content.style.transition = `transform ${TRANSITION_DURATION_MS}ms ${TRANSITION_TIMING}`;
  }, [containerRef]);

  const handleStart = useCallback((e: TouchEvent) => {
    setSwipeState({
      startY: e.touches[0].clientY,
      isDragging: true,
      thresholdReached: false,
    });
  }, []);

  const handleMove = useCallback(
    (e: TouchEvent) => {
      const { startY, isDragging } = swipeState;
      if (startY === null || !isDragging) return;

      const currentY = e.touches[0].clientY;
      const diff = Math.max(0, currentY - startY);

      updateContainerTransform(diff);
      setSwipeState((prev) => ({
        ...prev,
        thresholdReached: diff >= threshold,
      }));
    },
    [swipeState, threshold, updateContainerTransform]
  );

  const handleEnd = useCallback(() => {
    const { thresholdReached } = swipeState;
    if (thresholdReached) {
      onClose();
    }

    setSwipeState({
      startY: null,
      isDragging: false,
      thresholdReached: false,
    });

    resetContainerTransform();
  }, [swipeState, onClose, resetContainerTransform]);

  useEffect(() => {
    const element = swipeRef.current;
    if (!element) return;

    element.addEventListener("touchstart", handleStart, { passive: true });
    element.addEventListener("touchmove", handleMove, { passive: false });
    element.addEventListener("touchend", handleEnd, { passive: true });

    return () => {
      element.removeEventListener("touchstart", handleStart);
      element.removeEventListener("touchmove", handleMove);
      element.removeEventListener("touchend", handleEnd);
    };
  }, [swipeRef, handleStart, handleMove, handleEnd]);
};

export default useSwipeToCloseSheet;
