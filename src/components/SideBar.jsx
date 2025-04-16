import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [showClothing, setShowClothing] = useState(false);
  const [showAccessoirs, setShowAccessoirs] = useState(false);
  const [showCosmetic, setShowCosmetic] = useState(false);

  return (
    <aside className="w-42 min-h-screen bg-white shadow-lg p-4 flex flex-col pt-15">
      <h2 className="text-xl font-bold mb-6 text-black ml-3"></h2>

      {/* Clothing Section */}
      <div>
        <button
          className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-200 rounded transition cursor-pointer"
          onClick={() => setShowClothing(!showClothing)}
        >
          <span>
            <Link to="/clothing">Clothing</Link>
          </span>
          <span className={`transition-transform ${showClothing ? "rotate-180" : ""}`}>&#9660;</span>
        </button>

        {showClothing && (
          <ul className="ml-6 mt-2 space-y-1 text-gray-600">
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/clothing/jeans">Jeans</Link>
            </li>
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/clothing/shirts">Shirts</Link>
            </li>
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/clothing/shoes">Shoes</Link>
            </li>
          </ul>
        )}
      </div>

      {/* Accessoirs Section */}
      <div className="mt-4">
        <button
          className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-200 rounded transition cursor-pointer"
          onClick={() => setShowAccessoirs(!showAccessoirs)}
        >
          <span>
            <Link to="/accessories">Accessoirs</Link>
          </span>
          <span className={`transition-transform ${showAccessoirs ? "rotate-180" : ""}`}>&#9660;</span>
        </button>

        {showAccessoirs && (
          <ul className="ml-6 mt-2 space-y-1 text-gray-600">
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/accessories/rings">rings</Link>
            </li>
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/accessories/chains">chains</Link>
            </li>
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/accessories/watches">Watchs</Link>
            </li>
          </ul>
        )}
      </div>

      {/* Cosmetic Section */}
      <div className="mt-4">
        <button
          className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-200 rounded transition cursor-pointer"
          onClick={() => setShowCosmetic(!showCosmetic)}
        >
          <span>
            <Link to="/cosmetics">Cosmetic</Link>
          </span>
          <span className={`transition-transform ${showCosmetic ? "rotate-180" : ""}`}>&#9660;</span>
        </button>

        {showCosmetic && (
          <ul className="ml-6 mt-2 space-y-1 text-gray-600">
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/cosmetics/parfums">parfums</Link>
            </li>
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/cosmetics/deodorants">Deodorant</Link>
            </li>
            <li className="hover:text-black-500 hover:bg-gray-100 cursor:pointer rounded-50">
              <Link to="/cosmetics/sticks">Sticks</Link>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
