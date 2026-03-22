export const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block font-cursive text-xl text-primary mb-2"
      >
        {label + (required ? " *" : "")}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-base font-body border border-primary bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-text-dark placeholder-text-dark/40"
        placeholder={placeholder}
      />
    </div>
  );
};
