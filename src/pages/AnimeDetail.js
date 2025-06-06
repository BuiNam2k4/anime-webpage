import React from "react";
import { useState, useEffect } from "react";
import { useAnimeContext } from "../contexts/AnimeContext";
import axios from "axios";
import ReactPlayer from "react-player";
import { useNavigate, useLocation, useParams } from "react-router-dom";
const withRouter = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return (
      <Component
        {...props}
        navigate={navigate}
        location={location}
        params={params}
      />
    );
  };
};

// class AnimeDetail extends React.Component {
// state = {
//   anime: null,
// };

// async componentDidMount() {
//   console.log("check props", this.props);
//   const { params, location } = this.props;
//   const id = params.id;
//   let res = await axios
//     .get(`https://api.jikan.moe/v4/anime/${id}`)
//     .catch((error) => {
//       console.log("Error At Detail: ", error);
//     });
//   console.log("check detail anime: ", res);
//   this.setState({
//     anime: res && res.data && res.data.data ? res.data.data : {},
//   });
// }
const AnimeDetail = ({ params, location }) => {
  const [anime, setAnime] = useState(null);

  const { addToFav, removeFav, isFavourite } = useAnimeContext();
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        console.log("check props", { params, location });
        const id = params.id;
        const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        console.log("check detail anime: ", res);
        setAnime(res && res.data && res.data.data ? res.data.data : {});
      } catch (error) {
        console.log("Error At Detail: ", error);
        setAnime({});
      }
    };

    fetchAnime();
  }, [params.id]); // Dependency array ensures effect runs when params.id changes
  // const favourite = isFavourite(anime.mal_id);
  const handleFavClick = (e) => {
    if (!anime || !anime.mal_id) return;
    const isFav = isFavourite(anime.mal_id);
    if (isFav) {
      removeFav(anime.mal_id);
      alert(`${anime.title} removed from favorites`);
    } else {
      addToFav(anime);
      alert(`${anime.title} added to favorites`);
    }
  };

  if (!anime) return <div className="text-yellow">Loading...</div>;
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2">{anime.title}</h1>
      <h2 className="text-lg text-gray-400 mb-4">{anime.title_english}</h2>

      {/* Tabs Navigation */}
      <nav className="border-b border-gray-600 mb-4">
        <ul className="flex space-x-4">
          {[
            "Details",
            "Characters & Staff",
            "Episodes",
            "Videos",
            "Stats",
            "Reviews",
            "Recommendations",
            "Interest Stacks",
            "News",
            "Forum",
            "Clubs",
            "Pictures",
          ].map((tab) => (
            <li key={tab}>
              <a
                href="#"
                className={`pb-2 ${
                  tab === "Details"
                    ? "border-b-2 border-blue-500 text-blue-400"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex">
        {/* Left Section: Poster and Edit Status */}
        <div className="w-1/4 pr-4">
          <img
            src={anime.images.jpg.image_url}
            alt="Anime Poster"
            className="w-full mb-4"
          />
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-white font-bold mb-2">Edit Status</h3>
            <p className="text-gray-400 text-sm mb-2">
              * Your list is public by default.
            </p>
            <div className="mb-2">
              <label className="block text-sm text-gray-400">Status:</label>
              <select className="w-full bg-gray-700 text-white p-1 rounded">
                <option>Completed</option>
                <option>Watching</option>
                <option>Plan to Watch</option>
                <option>Dropped</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-sm text-gray-400">Eps Seen:</label>
              <div className="flex items-center">
                <input
                  type="number"
                  value="12"
                  className="w-12 bg-gray-700 text-white p-1 rounded mr-2"
                />
                <span className="text-gray-400">/ 12</span>
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-sm text-gray-400">Your Score:</label>
              <select className="w-full bg-gray-700 text-white p-1 rounded">
                <option>10 (Masterpiece)</option>
                <option>9</option>
                <option>8</option>
                <option>7</option>
                <option>6</option>
                <option>5</option>
              </select>
            </div>
            <button
              onClick={(e) => handleFavClick(e)}
              className={`w-full bg-blue-500
              text-white py-2 rounded hover:bg-blue-600`}
            >
              Update
            </button>
            <button className="w-full text-gray-400 text-sm mt-2 hover:text-gray-200">
              Remove from Favorites
            </button>
          </div>
          <div className="mt-1 p-4 bg-gray-800 rounded">
            <p className="text-white font-bold mb-2">Alternative titles</p>
            <p3 className="text-gray-400 font-semibold">
              Synonyms: {anime.title_synonyms.map((t, index) => t).join(",")}
            </p3>
          </div>
          <div className="mt-1 p-4 bg-gray-800 rounded">
            <p className="text-white font-bold mb-2">Information</p>
            <hr></hr>
            <p className="text-sm text-gray-400 font-semibold">
              Type: {anime.type}{" "}
            </p>
            <p className="text-sm text-gray-400 font-semibold">
              Episodes: {anime.episodes}{" "}
            </p>
            <p3 className="text-sm text-gray-400 font-semibold">
              Status: {anime.status}{" "}
            </p3>
            <p3 className="text-sm text-gray-400 font-semibold">
              Aired: {anime.aired.string}{" "}
            </p3>
          </div>
        </div>

        {/* Right Section: Anime Info and Synopsis */}
        <div className="w-3/4 pl-4">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <div className="font-bold block bg-blue-900 text-center text-white">
                Score
              </div>
              <p className="text-center text-black font-bold text-2xl">
                {anime.mal_id === 39783 ? "10.0" : parseFloat(anime.score)}
              </p>{" "}
              <p className="text-red-500 font-bold text-2xl">
                {anime.mal_id == 39783 || anime.mal_id === 9253
                  ? "Masterpiece"
                  : "TV-Serries"}
              </p>
              {/*anime.score*/}
              <p className="text-black text-sm">486,625 users</p>
            </div>
            <div className="mr-4">
              <p className="text-black">
                Ranked #{" "}
                <span className="font-bold">
                  {anime.mal_id === 39783
                    ? "#1-TOP 1 Harem Romcom"
                    : anime.rank}
                </span>
              </p>
              <p className="text-black">
                Popularity #
                <span className="font-bold">{anime.popularity}</span>
              </p>
              <p className="text-black">
                Members{" "}
                <span className="font-bold">{parseFloat(anime.members)}</span>
              </p>
            </div>
            <div className="ml-auto flex space-x-2">
              <select className="bg-gray-700 text-white p-1 rounded">
                <option>Completed</option>
                <option>Watching</option>
                <option>Plan to Watch</option>
              </select>
              <button className="bg-yellow-500 text-black px-2 py-1 rounded">
                ☆ 10 (Masterpiece)
              </button>
            </div>
          </div>
          <strong>Genres:</strong> {anime.genres.map((g) => g.name).join(", ")}
          <p className="text-gray-700 mb-2">
            {anime.season} {anime.year} • {anime.type} •{" "}
            {anime.studios.map((n) => n.name)}
          </p>
          <p className="text-gray-600 mb-4">{anime.episode}</p>
          {/* Teaser Video */}
          <div className="mb-4">
            {anime.trailer && anime.trailer.youtube_id ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${anime.trailer.youtube_id}`}
                // width="50%"
                // height="500px"
                className="aspect-video ..."
              />
            ) : (
              <p className="text-white">No trailer available</p>
            )}
            <a href="#" className="text-blue-400 text-sm">
              More videos
            </a>
          </div>
          {/* Synopsis */}
          <h3 className="font-bold text-lg mb-2">Synopsis</h3>
          <p className="text-gray-800 mb-4">{anime.synopsis}</p>
          {/* Background */}
          <h3 className="font-bold text-lg mt-4 mb-2">Background</h3>
          <p className="text-gray-800">{anime.background}</p>
        </div>
      </div>
    </div>
  );
};
export default withRouter(AnimeDetail);
