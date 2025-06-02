import React from "react";
import { Link } from "react-router-dom";
import kurisu from "../assets/images/107935945_p1_master1200.jpg";
class AnimeCard extends React.Component {
  render() {
    const { anime } = this.props;
    return (
      <Link to={`/anime/${anime.id}`} className="block">
        <div
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg
                hover: shadow-x1 transition-shadow"
        >
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-64
                    object-cover"
          ></img>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{anime.title}</h3>
          </div>
        </div>
      </Link>
    );
  }
}
export default AnimeCard;
