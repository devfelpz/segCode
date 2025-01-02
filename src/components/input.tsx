import type { UseFormRegister } from "react-hook-form";

const InputField = ({
	id,
	label,
	type,
	register,
	errorMessage,
	as: Component = "input",
	...reset
}: {
	id: string;
	label: string;
	type: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	register: UseFormRegister<any>;
	errorMessage?: string;
	as?: "input" | "textarea"
}) => (
<div className="relative">
    <Component
      id={id}
      {...register(id)}
      type={type}
      className={`peer h-10 w-full border-b bg-transparent border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-400 ${
        errorMessage ? "border-red-500 focus:border-red-500" : ""
      }`}
      placeholder=""
      aria-invalid={!!errorMessage}
      aria-describedby={errorMessage ? `${id}-error` : undefined}
      {...reset}
    />
    <label
      htmlFor={id}
      className={`absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
        peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-sm ${
          errorMessage ? "text-red-500 peer-focus:text-red-500" : ""
        }`}
    >
      {label}
    </label>
    {errorMessage && (
      <span id={`${id}-error`} className="text-red-500 text-xs mt-1">
        {errorMessage}
      </span>
    )}
  </div>
);

export default InputField;
