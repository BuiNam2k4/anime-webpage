import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-blue-900 text-white font-semi-bold">
      <ul className="flex space-x-4">
        <li className="relative group">
          <a href="#" className="block px-4 py-3 hover:bg-gray-600">
            Anime
          </a>
          <ul className="absolute left-0 top-full hidden group-hover:block bg-gray-700 w-48 shadow-lg">
            <li className="relative group">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                {" "}
                xx
              </a>
            </li>

            <li className="relative group">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                Điện tho
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                Điện thoại
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <a href="#" className="block px-4 py-3 hover:bg-gray-600">
            Manga
          </a>
          <ul className="absolute left-0 top-full hidden group-hover:block bg-gray-700 w-48 shadow-lg">
            <li className="relative group">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                Điện thoại
              </a>
              {/* <ul className="absolute left-full top-0 hidden group-hover:block bg-gray-700 w-48 shadow-lg">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    iPhone
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Samsung
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Xiaomi
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="relative group">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                Laptop
              </a>
              {/* <ul className="absolute left-full top-0 hidden group-hover:block bg-gray-700 w-48 shadow-lg">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    MacBook
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    Dell
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                    HP
                  </a>
                </li>
              </ul> */}
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                Community
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="block px-4 py-3 hover:bg-gray-600">
            Community
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-3 hover:bg-gray-600">
            Watch
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-3 hover:bg-gray-600">
            Read
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-3 hover:bg-gray-600">
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
