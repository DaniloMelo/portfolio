import { InputHTMLAttributes } from "react";

interface ProjectFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  htmlFor: string;
}

export default function ProjectFormInput({
  labelText,
  htmlFor,
  ...rest
}: ProjectFormInputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-sm" htmlFor={htmlFor}>
        {labelText}
      </label>

      <input
        id={htmlFor}
        className="
            h-12 text-md md:h-10 px-2 py-2 rounded-md bg-primary-background dark:bg-primary-background 
            border border-secondary-border outline-none focus-within:border-accent dark:focus-within:border-accent/40
          "
        {...rest}
      />
    </div>
  );
}
