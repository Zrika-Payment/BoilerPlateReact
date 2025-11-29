export const Checkbox = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      <div className="flex items-start">
        <input
          type="checkbox"
          className={`mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 ${className}`}
          {...props}
        />
        {label && (
          <label htmlFor={props.id} className="ml-2 block text-sm text-gray-700">
            {label}
          </label>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};