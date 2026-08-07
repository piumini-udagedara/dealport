interface SearchPillProps {
  placeholder: string;
  actionLabel?: string;
  wrapperClassName: string;
  actionClassName?: string;
  iconClassName?: string;
}

export function SearchPill({
  placeholder,
  actionLabel,
  wrapperClassName,
  actionClassName = "",
  iconClassName,
}: SearchPillProps) {
  return (
    <div className={wrapperClassName}>
      <div className="flex h-[36px] flex-1 items-center rounded-[200px] px-6">
        <span className="text-[16px] tracking-[0.005em] text-black/60">{placeholder}</span>
      </div>
      <button
        type="button"
        className={`flex h-[36px] items-center justify-center gap-2 rounded-[200px] ${actionClassName}`.trim()}
      >
        {iconClassName && <span className={iconClassName} />}
        {actionLabel}
      </button>
    </div>
  );
}
