export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  isEmpty = false,
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 ${isEmpty ? "focus:ring-red-500" : ""}`}
      />
      {isEmpty && (
        <p className="text-red-500 text-sm">This field cannot be left empty</p>
      )}
    </div>
  );
}
