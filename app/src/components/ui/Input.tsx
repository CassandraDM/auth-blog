type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  required?: boolean;
};

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="border border-gray-300 rounded-md p-2"
    />
  );
};

export default Input;
