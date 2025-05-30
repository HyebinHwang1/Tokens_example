import { useRef, useEffect, RefObject } from "react";

interface DragToScrollOptions {
  scrollSensitivity?: number;
}

export function useDragToScroll<T extends HTMLElement>(
  options?: DragToScrollOptions
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const scrollSensitivity = options?.scrollSensitivity ?? 1.5;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - node.offsetLeft;
      scrollLeftStart.current = node.scrollLeft;
      node.style.cursor = "grabbing";
      node.style.userSelect = "none";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - node.offsetLeft;
      const walk = (x - startX.current) * scrollSensitivity;
      node.scrollLeft = scrollLeftStart.current - walk;
    };

    const handleMouseUpOrLeave = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      node.style.cursor = "grab";
      node.style.removeProperty("user-select");
    };

    const canScroll = node.scrollWidth > node.clientWidth;
    if (canScroll) {
      node.style.cursor = "grab";
    } else {
      node.style.cursor = "default";
    }

    if (canScroll) {
      node.addEventListener("mousedown", handleMouseDown as EventListener);
      document.addEventListener("mousemove", handleMouseMove as EventListener);
      document.addEventListener(
        "mouseup",
        handleMouseUpOrLeave as EventListener
      );
      node.addEventListener(
        "mouseleave",
        handleMouseUpOrLeave as EventListener
      );
    }

    return () => {
      node.removeEventListener("mousedown", handleMouseDown as EventListener);
      document.removeEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );
      document.removeEventListener(
        "mouseup",
        handleMouseUpOrLeave as EventListener
      );
      node.removeEventListener(
        "mouseleave",
        handleMouseUpOrLeave as EventListener
      );

      if (canScroll) {
        node.style.removeProperty("cursor");
        node.style.removeProperty("user-select");
      }
    };
  }, [scrollSensitivity]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const updateCursor = () => {
      if (node.scrollWidth > node.clientWidth) {
        if (!isDragging.current) {
          node.style.cursor = "grab";
        }
      } else {
        node.style.cursor = "default";
      }
    };

    updateCursor();

    const observer = new MutationObserver(updateCursor);
    observer.observe(node, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
