"use client";
import FixAspectWrapper from "@/components/roots/fixAspectWrapper";
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
    <main className="w-screen h-screen bg-slate-100 text-black">
      <div className="flex flex-col justify-center items-center">
        <p>
          x={mousePos.x}, y={mousePos.y}
        </p>
        <button className="p-2 border-black border-2">Click</button>
      </div>
      <div className="bg-red-300 w-[200px] h-[600px]"></div>
    </main>
  );
}
