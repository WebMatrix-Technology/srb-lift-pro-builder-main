"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated elevator scene:
 * - Floors are equally spaced from bottom (1) to top (4)
 * - Cabin moves one floor at a time, stops at each floor, opens doors, closes, then continues
 * - Direction reverses at top/bottom
 */
const ElevatorScene = () => {
  const totalFloors = 4; // 1..4
  const travelRem = 12; // total vertical travel in rem
  const stepRem = travelRem / (totalFloors - 1); // equal spacing per floor

  // State
  const [currentFloor, setCurrentFloor] = useState(0); // 0..3 (bottom..top)
  const [direction, setDirection] = useState<1 | -1>(1);
  const directionRef = useRef<1 | -1>(1);
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  const [doorsOpen, setDoorsOpen] = useState(false);
  const [moving, setMoving] = useState(false);
  const [moveDuration, setMoveDuration] = useState(1200);
  const [callQueue, setCallQueue] = useState<number[]>([]);
  const callQueueRef = useRef<number[]>([]);
  useEffect(() => {
    callQueueRef.current = callQueue;
  }, [callQueue]);

  // Refs for current values
  const currentFloorRef = useRef(0);
  useEffect(() => {
    currentFloorRef.current = currentFloor;
  }, [currentFloor]);

  // Timers for the open/close/move cycle
  const timeoutsRef = useRef<number[]>([]);
  const clearTimers = () => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  };

  // Timings
  const openDuration = 900;
  const closeDuration = 600;
  const travelDuration = 1200;

  useEffect(() => {
    let cancelled = false;
    const cycle = () => {
      if (cancelled) return;

      const queue = callQueueRef.current;
      const at = currentFloorRef.current;

      // Express handling: if there is a target, move directly there without intermediate stops
      if (queue.length > 0) {
        const target = queue[0];
        if (target === at) {
          // already at target: open -> close -> dequeue -> continue
          setMoving(false);
          setDoorsOpen(true);
          timeoutsRef.current.push(
            window.setTimeout(() => {
              if (cancelled) return;
              setDoorsOpen(false);
              timeoutsRef.current.push(
                window.setTimeout(() => {
                  if (cancelled) return;
                  queue.shift();
                  setCallQueue([...queue]);
                  cycle();
                }, closeDuration),
              );
            }, openDuration),
          );
          return;
        }
        const steps = Math.abs(target - at);
        const dir: 1 | -1 = target > at ? 1 : -1;
        setDirection(dir);
        setDoorsOpen(false);
        setMoving(true);
        setMoveDuration(travelDuration * steps);
        setCurrentFloor(target);
        timeoutsRef.current.push(
          window.setTimeout(() => {
            if (cancelled) return;
            setMoving(false);
            setDoorsOpen(true);
            timeoutsRef.current.push(
              window.setTimeout(() => {
                if (cancelled) return;
                setDoorsOpen(false);
                timeoutsRef.current.push(
                  window.setTimeout(() => {
                    if (cancelled) return;
                    queue.shift();
                    setCallQueue([...queue]);
                    cycle();
                  }, closeDuration),
                );
              }, openDuration),
            );
          }, travelDuration * steps + 50),
        );
        return;
      }

      // Default behavior: stop at each floor
      setMoving(false);
      setDoorsOpen(true);
      timeoutsRef.current.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setDoorsOpen(false);
          timeoutsRef.current.push(
            window.setTimeout(() => {
              if (cancelled) return;
              setMoving(true);
              setMoveDuration(travelDuration);
              setCurrentFloor((prev) => {
                if (prev === totalFloors - 1) {
                  setDirection(-1);
                  return prev - 1;
                }
                if (prev === 0) {
                  setDirection(1);
                  return prev + 1;
                }
                return prev + directionRef.current;
              });
              timeoutsRef.current.push(
                window.setTimeout(() => {
                  if (cancelled) return;
                  setMoving(false);
                  cycle();
                }, travelDuration + 50),
              );
            }, closeDuration),
          );
        }, openDuration),
      );
    };
    cycle();
    return () => {
      cancelled = true;
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex h-64 w-36 select-none items-end justify-center md:h-80 md:w-48" aria-label="Animated elevator with doors">
      <style>
        {`
        @keyframes floorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.3; }
        }
      `}
      </style>
      <div className="relative h-full w-24 rounded-md border border-white/30 bg-white/10 backdrop-blur-sm">
        {/* Shaft rails */}
        <div className="absolute left-2 top-0 h-full w-1 rounded bg-white/30" />
        <div className="absolute right-2 top-0 h-full w-1 rounded bg-white/30" />

        {/* Floor separators (bottom -> top) */}
        {Array.from({ length: totalFloors }).map((_, idx) => {
          const bottomRem = 0.5 + stepRem * idx; // aligns with cabin base (bottom-2 ≈ 0.5rem)
          return (
            <div
              key={`split-${idx}`}
              className="absolute left-1 right-1 h-px bg-white/30"
              style={{ bottom: `${bottomRem}rem` }}
              aria-hidden
            />
          );
        })}

        {/* Travel track and cabin */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-[12rem] w-20">
          <div
            className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-md border border-white/60 bg-white/80 p-2 text-center text-xs text-primary shadow-xl"
            style={{
              transform: `translate(-50%, ${-(stepRem * currentFloor)}rem)`,
              transition: moving ? `transform ${moveDuration}ms ease-in-out` : undefined,
            }}
          >
            <div className="mb-1 h-2 w-full rounded bg-primary/20" />
            {/* Door viewport */}
            <div className="relative h-12 overflow-hidden rounded bg-white">
              {/* Interior */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-200" />
              {/* Doors */}
              <div className="absolute inset-0">
                <div
                  aria-hidden
                  className={`absolute left-0 top-0 h-full w-1/2 border-r border-slate-300 bg-slate-100 transition-transform duration-500 ease-out ${
                    doorsOpen ? "-translate-x-[95%]" : "translate-x-0"
                  }`}
                />
                <div
                  aria-hidden
                  className={`absolute right-0 top-0 h-full w-1/2 border-l border-slate-300 bg-slate-100 transition-transform duration-500 ease-out ${
                    doorsOpen ? "translate-x-[95%]" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floor indicator + call buttons (bottom to top) */}
        <div className="absolute right-0 top-3 bottom-3 w-20 text-white/90 flex flex-col-reverse justify-between md:right-2 md:w-24 lg:-right-20 lg:w-28">
          {Array.from({ length: totalFloors }).map((_, i) => {
            const floorNumber = i + 1; // bottom to top
            const isActive = i === currentFloor;
            const isQueued = callQueue.includes(i);
            return (
              <div key={floorNumber} className="flex items-center gap-2 pr-1 md:pr-0">
                <span className={`h-1.5 w-1.5 rounded-full md:h-2 md:w-2 ${isActive ? "bg-primary" : "bg-white/40"}`} />
                <span className={`text-[10px] md:text-xs ${isActive ? "font-semibold text-white" : ""}`}>Floor {floorNumber}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // don't toggle hero doors
                    if (!callQueueRef.current.includes(i)) {
                      callQueueRef.current = [...callQueueRef.current, i];
                      setCallQueue(callQueueRef.current);
                    }
                  }}
                  className={`ml-2 h-4 w-4 rounded-full border shadow md:h-5 md:w-5 ${
                    isQueued ? "bg-primary border-primary" : "bg-white/80 border-white hover:bg-white"
                  }`}
                  aria-label={`Call elevator to floor ${floorNumber}`}
                >
                  <span className="sr-only">Call</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ElevatorScene;


