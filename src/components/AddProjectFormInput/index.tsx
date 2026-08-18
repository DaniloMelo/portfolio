import { InputHTMLAttributes } from "react";

interface AddProjectFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  htmlFor: string;
}

export default function AddProjectFormInput({
  labelText,
  htmlFor,
  ...rest
}: AddProjectFormInputProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={htmlFor}>{labelText}</label>

      <input
        id={htmlFor}
        className="
            h-12 text-xl md:h-10 px-2 py-2 rounded-md 
            border border-secondary-border outline-none focus-within:border-accent dark:focus-within:border-accent/40
          "
        {...rest}
      />
    </div>
  );
}
