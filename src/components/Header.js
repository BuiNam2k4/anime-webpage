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
            <Link to="/favourite" className=" hover:text-gray-300 mr-3">
              Favourite
            </Link>

            <Link to="/Login" className="hover:text-gray-300">
              Login
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
