"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/app/lib/hooks/useIntersectionObserver";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationType?: "fade-in" | "fade-in-up" | "fade-in-down";
}

export default function FadeInOnScroll({
  children,
  className = "",
  delay = 0,
  animationType = "fade-in-up",
}: FadeInOnScrollProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: true,
  });

  const getDelayClass = (delay: number) => {
    if (delay === 100) return "fade-in-delay-100";
    if (delay === 200) return "fade-in-delay-200";
    if (delay === 300) return "fade-in-delay-300";
    if (delay === 500) return "fade-in-delay-500";
    return "";
  };

  const animationClass = isIntersecting
    ? `${animationType} ${getDelayClass(delay)}`
    : "opacity-0";

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}
