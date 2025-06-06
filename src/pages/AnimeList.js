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
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchAnime = this.fetchAnime.bind(this);
  }

  handleSearchChange(event) {
    const search = event.target.value;
    this.setState(
      {
        search: search,
      }
      // () => {
      //   if (search.trim()) {
      //     this.fetchAnime();
      //   } else {
      //     this.setState({
      //       anime: [],
      //     });
      //   }
      // }
    );
  }
  async fetchAnimeTop() {
    await axios
      // .get(`https://api.jikan.moe/v4/top/anime`)
      .get(`https://api.jikan.moe/v4/seasons/now`)
      .then((response) => {
        this.setState({
          animes: response.data.data,
        });
      })
      .catch((error) => {
        console.error("error fetching anime: ", error);
      });
  }

  async fetchAnime() {
    await axios
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
  handleSearch = () => {
    const { search } = this.state;
    console.log("Dang tim kiem", search);
    this.fetchAnime(search.trim());
  };
  componentDidMount() {
    this.fetchAnimeTop();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.search !== this.state.search) {
  //     this.fetchAnime();
  //   }
  // }
  render() {
    const { animes, search } = this.state;
    if (animes.length === 0)
      return <div className="text-yellow-600">loading...</div>;

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-black">Anime List</h1>
        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={this.handleSearchChange}
          className="w-5/6 p-2 mb-6 bg-gray-800 text-white rounded"
        ></input>{" "}
        <span>
          <button
            onClick={this.handleSearch}
            className="h-10 w-16 rounded bg-red-700 hover:bg-red-800 text-white"
          >
            Search
          </button>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:grid-cols-5">
          {animes &&
            animes.length > 0 &&
            animes.map((anime) => (
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
