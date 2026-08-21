interface ErrorMessageProps {
  errors: string[];
}

export default function ErrorMessage({ errors }: ErrorMessageProps) {
  return errors.map((error, index) => (
    <div
      className="
        p-2 w-100 text-center rounded-lg text-white text-lg
        bg-red-800 dark:bg-red-900
      "
      key={index}
    >
      <p className="">{error}</p>
    </div>
  ));
}
