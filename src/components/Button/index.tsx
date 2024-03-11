// import React from "react";


// const shapes = Record<string, string>{
//   round: "rounded-[10px]",
//   circle: "rounded-[50%]",
// } as const;

// const variants = {
//   fill: {
//     teal_300: "bg-teal-300 text-white-A700",
//     deep_orange_400: "bg-deep_orange-400",
//   },
// } as const;
// const sizes = {
//   xs: "h-[38px] px-2.5 text-[13px]",
//   sm: "h-[40px] px-[11px]",
// } as const;

// type ButtonProps = Omit<
//   React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
//   "onClick"
// > &
//   Partial<{
//     className: string;
//     leftIcon: React.ReactNode;
//     rightIcon: React.ReactNode;
//     onClick: () => void;
//      shape: string;
//     // shape: keyof typeof shapes;
//     variant: keyof typeof variants;
//     size: keyof typeof sizes;
//     color: string;
//   }>;
// const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
//   children,
//   className = "",
//   leftIcon,
//   rightIcon,
//   shape = "",
//   variant = "fill",
//   size = "xs",
//   color = "teal_300",
//   ...restProps
// }) => {
//   return (
//     <button
//       className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
//       {...restProps}
//     >
//       {!!leftIcon && leftIcon}
//       {children}
//       {!!rightIcon && rightIcon}
//     </button>
//   );
// };

// export { Button };

import React from "react";

// Create a type for the shape prop
type Shape = "round" | "circle";
// Create a type for the variant prop
type Variant = "fill";
// Create a type for the size prop
type Size = "xs" | "sm";

// Define the shapes object with the Shape type
const shapes: Record<Shape, string> = {
  round: "rounded-[10px]",
  circle: "rounded-[50%]",
};

// Define the variants object with the Variant type
const variants: Record<Variant, Record<string, string>> = {
  fill: {
    teal_300: "bg-teal-300 text-white-A700",
    deep_orange_400: "bg-deep_orange-400",
  },
};

// Define the sizes object with the Size type
const sizes: Record<Size, string> = {
  xs: "h-[38px] px-2.5 text-[13px]",
  sm: "h-[40px] px-[11px]",
};

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape?: Shape;
    variant: Variant;
    size: Size;
    color: string;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round", // Set a default value for shape
  variant = "fill", // Set a default value for variant
  size = "xs", // Set a default value for size
  color = "teal_300", // Set a default value for color
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${
        shapes[shape] || ""
      } ${sizes[size] || ""} ${variants[variant]?.[color] || ""}
      `}
      {...restProps}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

export { Button };