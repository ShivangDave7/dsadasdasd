import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcOutlineGray500: "bg-white_A700 border-[1px] border-gray_500 border-solid",
  FillWhiteA700: "bg-white_A700",
  OutlineGray500: "bg-white_A700 border-[1px] border-gray_500 border-solid",
} as const;
const shapes = { srcRoundedBorder10: "rounded-[10px]" } as const;
const sizes = {
  smSrc: "pb-[13px] pt-[10px] px-[10px]",
  sm: "px-[9px] py-[10px]",
  md: "pb-[4px] pt-[9px] px-[4px]",
  lg: "pb-[8px] pt-[12px] px-[8px]",
  xl: "px-[11px] py-[12px]",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape = "",
      variant = "",
      size = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

export { Input };
