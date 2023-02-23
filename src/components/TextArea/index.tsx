import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray500: "bg-white_A700 border-[1px] border-gray_500 border-solid",
};

const sizes = {
  sm: "p-[18px]",
  md: "pb-[35px] pt-[26px] sm:px-[20px] px-[26px]",
};

export type TextAreaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    errors: string[];

    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      children,
      variant = "OutlineGray500",
      size = "md",
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${(size && sizes[size]) || ""} ${
            (variant && variants[variant]) || ""
          }`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

export { TextArea };
