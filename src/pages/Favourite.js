import { useAnimeContext } from "../contexts/AnimeContext";
import kurisu from "../assets/images/107935945_p1_master1200.jpg";
import AnimeCard from "../components/AnimeCard";
const Favourite = () => {
  const { favourites } = useAnimeContext();
  if (favourites) {
    return (
      <div className="container mx-auto p-4">
        <h1 className=" text-3xl font-bold mb-6">Your anime List </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites &&
            favourites.length > 0 &&
            favourites.map((anime) => (
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
  return (
    <div>
      <h2>No Favourite Anime Yet</h2>
      <p>Start Adding Anime and it will appear here</p>
    </div>
  );
};
export default Favourite;
