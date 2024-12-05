const InputField = ({ id, label, type }:{id:string, label:string,type:string}) => (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        className="peer h-10 w-full border-b border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-400"
        placeholder=""
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
  export default InputField;