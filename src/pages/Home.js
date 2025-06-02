import React from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";
import kurisu from "../assets/images/107935945_p1_master1200.jpg";

class Home extends React.Component {
  state = {
    animes: [],
  };

  async componentDidMount() {
    let res = await axios
      .get("https://api.jikan.moe/v4/anime")
      .catch((error) => {
        console.error("Loi fetching ", error);
      });
    console.log("data home object", res);
    const resArr = res.data.data.slice(0, 8);
    console.log("data fetching arr", resArr);
    this.setState({
      animes: resArr ? resArr : [],
    });
  }
  render() {
    const { animes } = this.state;
    console.log("data render", animes);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-black">Featured Anime</h1>
        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-6">
          {animes.map((anime, index) => (
            <>
              <AnimeCard
                key={anime.mal_id}
                anime={{
                  id: anime.mal_id,
                  title: anime.title,
                  image: anime.images.jpg.image_url,
                }}
              ></AnimeCard>
            </>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
