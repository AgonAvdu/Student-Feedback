import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  type,
  name,
  placeholder,
  error,
  ...props
}) => {
  return (
    <div className="input__container">
      <input
        placeholder={placeholder}
        className={`input ${error && "input__error"}`}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value ? value : ""}
        {...props}
      />
      <p className="input__error-message">{error}</p>
    </div>
  );
};

export default Input;
