"use client";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="236,72,153"
      outerAlpha={0.2}
      innerScale={1}
      outerScale={2}
    />
  );
}