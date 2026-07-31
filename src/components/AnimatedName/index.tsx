"use client";

import { TypeAnimation } from "react-type-animation";

interface AnimatedNameProps {
  name: string;
}

export default function AnimatedName({ name }: AnimatedNameProps) {
  return (
    <TypeAnimation
      sequence={[name, 100]}
      wrapper="span"
      speed={60}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
