import React from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";

class AnimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
      search: "",
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value,
    });
  }
  fetchAnime() {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${this.state.search}`)
      .then((response) => {
        this.setState({
          animes: response.data.data,
        });
      })
      .catch((error) => {
        console.error("error fetching anime: ", error);
      });
  }
  componentDidMount() {
    this.fetchAnime();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchAnime();
    }
  }
  render() {
    const { animes, search } = this.state;
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Anime List</h1>
        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={this.handleSearchChange}
          className="w-full p-2 mb-6 bg-gray-800 text-white rounded"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-6">
          {animes.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={{
                id: anime.mal_id,
                title: anime.title,
                image: anime.images.jpg.large_image_url,
                title_japanese: anime.title_japanese,
                type: anime.type,
                episodes: anime.episodes,
                synopsis: anime.synopsis,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default AnimeList;
