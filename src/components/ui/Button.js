export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg active:bg-blue-700 transition duration-200 ease-in-out cursor-pointer"
    >
      {children}
    </button>
  );
}
