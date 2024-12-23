import type { UseFormRegister } from "react-hook-form";

const InputField = ({
	id,
	label,
	type,
	register,
	errorMessage,
}: {
	id: string;
	label: string;
	type: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	register: UseFormRegister<any>;
	errorMessage?: string;
}) => (
	<div className="relative">
		<input
			id={id}
			{...register(id)}
			type={type}
			className={`peer h-10 w-full border-b bg-transparent border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-400 ${
				errorMessage ? "border-red-500 focus:border-red-500" : ""
			}`}
			placeholder=""
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
			<span className="text-red-500 text-xs mt-1">{errorMessage}</span>
		)}
	</div>
);

export default InputField;
