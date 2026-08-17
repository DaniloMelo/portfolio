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
    <div>
      <label htmlFor={htmlFor}>{labelText}</label>

      <input id={htmlFor} className="border" {...rest} />
    </div>
  );
}
