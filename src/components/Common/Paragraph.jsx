import React from "react";
import { cn } from "@/lib/utils";

const Paragraph = ({ text, className, animation = true }) => {
  return (
    <p
      data-aos={animation ? "fade-up" : undefined}
      className={cn("default-design", className)}
    >
      {text}
    </p>
  );
};

export default Paragraph;
