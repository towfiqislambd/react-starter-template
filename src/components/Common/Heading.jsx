import React from "react";
import { cn } from "@/lib/utils";

const Heading = ({
  text,
  className,
  animation = true,
  Variant = "h3",
  ...props
}) => {
  const Tag = Variant;

  return (
    <Tag
      data-aos={animation ? "fade-up" : undefined}
      className={cn("text-black text-2xl font-bold", className)}
      {...props}
    >
      {text}
    </Tag>
  );
};

export default Heading;
