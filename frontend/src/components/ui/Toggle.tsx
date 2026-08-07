interface ToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
        aria-checked={checked}
      />
      <span className="relative inline-flex h-7 w-12 items-center rounded-full bg-[#A8E5B4] transition-colors duration-200 peer-checked:bg-[#3D9F6B]">
        <span className="absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all duration-200 peer-checked:left-5" />
      </span>
      {label ? <span className="select-none text-sm font-medium text-heading">{label}</span> : null}
    </label>
  );
}
