export const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block font-cursive text-xl text-primary mb-2"
      >
        {label + (required ? " *" : "")}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-base font-body border border-primary bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-y text-text-dark placeholder-text-dark/40"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
