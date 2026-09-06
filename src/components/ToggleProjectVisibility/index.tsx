interface ToggleProjectVisibilityProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
}

export default function ToggleProjectVisibility({
  value,
  onChange,
}: ToggleProjectVisibilityProps) {
  return (
    <div className="flex flex-col gap-4 mt-20">
      <label>Visibilidade do projeto</label>

      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="size-5"
        />

        <span className="text-sm font-medium">
          <strong>{value ? "Projeto visível" : "Projeto Não visível"}</strong>
        </span>
      </div>
    </div>
  );
}
