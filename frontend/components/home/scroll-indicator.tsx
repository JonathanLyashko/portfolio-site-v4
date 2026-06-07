"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/icon";

export function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-[-60px] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 transition-all duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-label-caps text-[9px] tracking-[0.2em] text-primary/60">
        SCROLL TO EXPLORE
      </span>
      <div className="float-animation flex flex-col items-center">
        <Icon
          className="h-8 w-8 text-glow text-primary-container drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]"
          name="keyboard_double_arrow_down"
        />
        <div className="h-8 w-[1px] bg-gradient-to-b from-primary-container to-transparent opacity-40"></div>
      </div>
    </div>
  );
}
