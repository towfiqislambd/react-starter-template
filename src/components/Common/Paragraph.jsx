import React from "react";
import { cn } from "@/lib/utils";

const Paragraph = ({ text, className, animation = true, ...props }) => {
  return (
    <p
      data-aos={animation ? "fade-up" : undefined}
      className={cn("default-design", className)}
      {...props}
    >
      {text}
    </p>
  );
};

export default Paragraph;
