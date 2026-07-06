import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface BaseProps {
  label: string;
  error?: string;
  optional?: boolean;
}

type InputFieldProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaFieldProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };
type SelectFieldProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { as: "select"; children: ReactNode };

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

/**
 * Unified form field used across the Admission and Contact forms —
 * reproduces the original .field / .f-label styling and renders an
 * inline validation message when `error` is set.
 */
const FormField = (props: FormFieldProps) => {
  const { label, error, optional, id, as, children, ...rest } = props as FormFieldProps & {
    as?: string;
    children?: ReactNode;
  };

  return (
    <div>
      <label className="f-label" htmlFor={id}>
        {label} {optional && <span className="font-normal text-[var(--ink-soft)]">(Optional)</span>}
      </label>

      {as === "textarea" && (
        <textarea
          id={id}
          className={cn("field", error && "field-error")}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}

      {as === "select" && (
        <select id={id} className={cn("field", error && "field-error")} {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}>
          {children}
        </select>
      )}

      {(!as || as === "input") && (
        <input id={id} className={cn("field", error && "field-error")} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}

      {error && <p className="text-[12px] text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FormField;
