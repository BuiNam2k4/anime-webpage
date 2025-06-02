import React from "react";
import { Link } from "react-router-dom";
import kurisu from "../assets/images/107935945_p1_master1200.jpg";
class AnimeCard extends React.Component {
  render() {
    const { anime } = this.props;
    return (
      <Link to={`/anime/${anime.id}`} className="block">
        {/* <div
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
        </div> */}
        <div
          key={anime.mal_id || Math.random()}
          className="border rounded-md p-4 shadow-md hover:shadow-lg transition"
        >
          <img
            src={anime.image || "https://via.placeholder.com/150"}
            alt={anime.title || "No title"}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold">
            {anime.title || "Không có tiêu đề"}
          </h3>
          <p className="text-sm text-gray-600">
            <strong>Tiêu đề Nhật:</strong> {anime.title_japanese || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Loại:</strong> {anime.type || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Số tập:</strong> {anime.episodes || "N/A"}
          </p>
          <p className="text-sm text-gray-600 line-clamp-3">
            <strong>Tóm tắt:</strong> {anime.synopsis || "Không có tóm tắt"}
          </p>
        </div>
      </Link>
    );
  }
}
export default AnimeCard;
