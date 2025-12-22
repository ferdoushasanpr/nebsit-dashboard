export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Home</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Profile
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}
