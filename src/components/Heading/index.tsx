import React from "react";

const sizes = {
  s: "text-lg font-black",
  md: "text-xl font-extrabold",
  xs: "text-base font-extrabold",
  lg: "text-2xl font-extrabold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-cyan-900 font-avenir ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
