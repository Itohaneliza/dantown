import React from "react";

const sizes = {
  xs: "text-[13px] font-normal",
  s: "text-sm font-normal",
  md: "text-base font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-avenir ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
