interface SuccessMessageProps {
  message: string;
}

export default function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div
      className="
        p-2 w-100 text-center rounded-lg text-white text-lg
        bg-green-700 dark:bg-green-800
      "
    >
      <p className="">{message}</p>
    </div>
  );
}
