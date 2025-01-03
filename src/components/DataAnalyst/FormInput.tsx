import React from "react";

interface FormInputProps {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Corrected naming to camelCase
  className?: string; // For custom styles
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  name,
  required = false,
  placeholder = "",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label
        htmlFor={name}
        className="mb-1 text-lightblue text-sm font-semibold"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="p-2 border border-lightblue placeholder:text-lightblue text-lightblue rounded focus:outline-none focus:ring focus:ring-lightblue"
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
