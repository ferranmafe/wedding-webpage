export const RadioInput = ({
  label,
  name,
  value,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="flex items-center gap-3 font-body text-text-dark/80 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 appearance-none rounded-full border border-primary checked:bg-primary checked:border-primary transition-colors cursor-pointer relative after:content-[''] checked:after:bg-white after:rounded-full after:w-2 after:h-2 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
      />
      {label}
    </label>
  );
};
