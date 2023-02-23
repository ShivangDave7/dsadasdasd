import React from "react";

const variantClasses = {
  h1: "sm:text-[36px] md:text-[38px] text-[40px]",
  h2: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h3: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  h4: "sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "text-[18px]",
  h6: "text-[14px]",
  body1: "font-normal text-[12px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
