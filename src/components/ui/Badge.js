export default function Badge({ children, variant = "blue" }) {
  const variants = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    gray: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`${variants[variant]} text-xs font-semibold px-3 py-1 rounded-full`}
    >
      {children}
    </span>
  );
}
