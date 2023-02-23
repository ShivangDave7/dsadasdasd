import React from "react";

const shapes = {
  icbCircleBorder21: "rounded-[21px]",
  icbCircleBorder17: "rounded-[17px]",
  CircleBorder24: "rounded-[24px]",
} as const;
const variants = {
  icbOutlineWhiteA700: "border-[1px] border-solid border-white_A700",
  icbFillIndigoA200: "bg-indigo_A200",
  icbFillWhiteA700: "bg-white_A700",
  icbOutline: "bg-light_blue_900_7f",
  icbFillIndigoA2007f: "bg-indigo_A200_7f",
  OutlineBlack90019: "bg-gradient  shadow-bs1 text-white_A700",
  OutlineBlack9000c: "bg-gradient  shadow-bs text-white_A700",
  FillIndigoA200: "bg-indigo_A200 text-white_A700",
  OutlineGray300: "border-[1px] border-gray_300 border-solid text-gray_900",
  OutlineBlack9000c_1: "bg-white_A700 shadow-bs text-indigo_A100",
  OutlineBlack90019_1: "bg-white_A700 shadow-bs1",
} as const;
const sizes = {
  smIcn: "p-[5px]",
  mdIcn: "p-[9px]",
  sm: "p-[4px]",
  md: "p-[10px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
