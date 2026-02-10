export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Teacher Portal</h1>
        <button className="text-gray-600 hover:text-gray-800 font-medium">
          Logout
        </button>
      </div>
    </header>
  );
}
