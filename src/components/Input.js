const Input = ({
  label,
  placeholder,
  labelId,
  type,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:mb-1"
        htmlFor={labelId}
      >
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight ${
          errorMessage ? "border-red-600" : "border-gray-600"
        } focus:outline-none focus:bg-white`}
        id={labelId}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      <small className="text-red-600">{errorMessage}</small>
    </div>
  );
};

export default Input;
