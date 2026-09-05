"use client";

import { TypeAnimation } from "react-type-animation";

interface AnimatedNameProps {
  name: string;
}

export default function AnimatedName({ name }: AnimatedNameProps) {
  const promptName = `~/ ${name}`;
  return (
    <TypeAnimation
      sequence={[promptName, 100]}
      wrapper="span"
      speed={60}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
