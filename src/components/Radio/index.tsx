import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = { FillGray300: "bg-gray_300" } as const;
const shapes = { RoundedBorder8: "rounded-[8px]" } as const;

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    checked: boolean;
    errors: string[];
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
  }>;

const Radio = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      checked = false,
      errors = [],
      shape = "RoundedBorder8",
      variant = "FillGray300",
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${className} ${(shape && shapes[shape]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

export { Radio };
