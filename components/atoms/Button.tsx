

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    fullWidth?: boolean;
    mtButton?: MarginProps;
}

type MarginProps = "none" | "small" | "medium" | "large";

const marginMap: Record<MarginProps, string> = {
  none: "mt-0",
  small: "mt-5",
  medium: "mt-8",
  large: "my-12",
};
const Button: React.FC<ButtonProps> = ({
  children,
  mtButton = "medium",
  fullWidth = true,
  className = "",
  ...rest
}) => {
  const marginClass = marginMap[mtButton as MarginProps];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`h-12 rounded-xl bg-[#6D03F5] text-white font-semibold shadow-sm transition duration-200 hover:bg-[#430397] active:scale-[0.98] disabled:opacity-60 ${
        fullWidth ? "w-full" : ""
      } ${className} ${marginClass}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;