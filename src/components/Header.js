import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Anime-NBP
          </Link>
          <nav>
            <Link to="/" className=" hover:text-gray-300 mr-3">
              Home
            </Link>

            <Link to="/anime" className="hover:text-gray-300">
              Anime List
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
