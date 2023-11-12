"use client";
import FixAspectWrapper from "@/components/roots/fixAspectWrapper";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const LockPortrait = ({
  children,
  aspect = { width: 16, height: 9 },
}: {
  children: React.ReactNode;
  aspect?: { width: number; height: number };
}) => {
  const [isPortrait, setIsPortrait] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const listener = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", listener);
      console.log(window.innerWidth, window.innerHeight);
    }

    return () => window.removeEventListener("resize", listener);
  }, []);

  useEffect(() => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  }, [pathname]);

  return (
    <div
      className={
        isPortrait
          ? "h-[100vw] w-[100vh] transform-gpu rotate-90 origin-top-left translate-x-[100vw] overflow-auto"
          : "w-screen h-screen overflow-auto"
      }
    >
      <FixAspectWrapper aspect={aspect} isPortrait={isPortrait}>
        {children}
      </FixAspectWrapper>
    </div>
  );
};

export default LockPortrait;
