"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    const follower = document.createElement("div");

    // Inner dot
    cursor.style.width = "8px";
    cursor.style.height = "8px";
    cursor.style.background = "#ec4899";
    cursor.style.position = "fixed";
    cursor.style.borderRadius = "50%";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.transform = "translate(-50%, -50%)";

    // Outer ring
    follower.style.width = "30px";
    follower.style.height = "30px";
    follower.style.border = "2px solid #ec4899";
    follower.style.position = "fixed";
    follower.style.borderRadius = "50%";
    follower.style.pointerEvents = "none";
    follower.style.zIndex = "9998";
    follower.style.transform = "translate(-50%, -50%)";
    follower.style.transition = "all 0.15s ease";

    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      follower.style.left = e.clientX + "px";
      follower.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
      document.body.removeChild(follower);
    };
  }, []);

  return null;
}