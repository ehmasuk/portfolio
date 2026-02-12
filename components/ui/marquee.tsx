import { cn } from "@/lib/utils";
import * as React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({ children, pauseOnHover = false, direction = "left", speed = 30, className, ...props }: MarqueeProps) {
  return (
    <div className={cn("w-full overflow-hidden z-10", className)} {...props}>
      <div className="relative flex max-w-[90vw] overflow-hidden">
        <div
          className={cn("flex w-max animate-marquee", pauseOnHover && "hover:paused", direction === "right" && "animate-marquee-reverse")}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}


{/* <div className="flex flex-col gap-4">
  <Marquee pauseOnHover className="mask-x-from-80%" speed={40}>
    {brandListTop.map((brand, index) => (
      <div key={index} className="relative h-full w-fit mx-8 flex items-center justify-start gap-2">
        {brand.icon}
        <p className="text-xl font-bold capitalize">{brand.name}</p>
      </div>
    ))}
  </Marquee>
  <Marquee direction="right" pauseOnHover className="mask-x-from-80%" speed={40}>
    {brandListBottom.map((brand, index) => (
      <div key={index} className="relative h-full w-fit mx-10 flex items-center justify-start gap-2">
        {brand.icon}
        <p className="text-xl font-bold capitalize">{brand.name}</p>
      </div>
    ))}
  </Marquee>
</div> */}