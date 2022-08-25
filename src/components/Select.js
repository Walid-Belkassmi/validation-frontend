const Select = ({
  label,
  labelId,
  onSelectChange,
  selectOptions,
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
      <select
        className={`block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight ${
          errorMessage ? "border-red-600" : "border-gray-600"
        } focus:outline-none focus:bg-white focus:border-gray-500 capitalize`}
        id={labelId}
        onChange={onSelectChange}
      >
        <option value="">Select an option</option>
        {selectOptions.map((city) => {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>
      <small className="text-red-600">{errorMessage}</small>
    </div>
  );
};

export default Select;
