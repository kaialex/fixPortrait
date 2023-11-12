"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="w-screen h-screen text-black">
      <div className="flex flex-col justify-center items-center gap-2">
        <p>
          x={mousePos.x}, y={mousePos.y}
        </p>
        <button className="p-2 border-black border-2">Click</button>
        <div className="w-3/5 h-[500px] bg-red-500 border-2 border-black"></div>
      </div>
    </main>
  );
}
