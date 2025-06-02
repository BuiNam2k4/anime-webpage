import React from "react";

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

class AnimeDetail extends React.Component {
  state = {
    anime: null,
  };
  async componentDidMount() {
    console.log("check props", this.props);
    const { params, location } = this.props;
    const id = params.id;
    let res = await axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .catch((error) => {
        console.log("Error At Detail: ", error);
      });
    console.log("check detail anime: ", res);
    this.setState({
      anime: res && res.data && res.data.data ? res.data.data : {},
    });
  }
  render() {
    let { anime } = this.state;
    if (!anime) return <div className="text-yellow">Loading...</div>;

    return (
      <div className="container mx-auto p-4 bg-white-100">
        <h1 className="text-3xl font-bold mb-6 text-red">{anime.title}</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="text-blue text-xl">
            <p className="mb-4">{anime.synopsis}</p>
            <p>
              <strong>Episodes:</strong> {anime.episodes}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {anime.genres.map((g) => g.name).join(", ")}
            </p>
            <p>
              <strong>Status:</strong> {anime.status}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4 text-red">Watch Trailer</h2>
          {anime.trailer && anime.trailer.youtube_id ? (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${anime.trailer.youtube_id}`}
              width="50%"
              height="500px"
            />
          ) : (
            <p className="text-white">No trailer available</p>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(AnimeDetail);
