import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);
export const AnimeProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const storeFav = localStorage.getItem("favourites");
    if (storeFav) setFavourites(JSON.parse(storeFav));
  }, []);
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);
  const addToFav = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };
  const removeFav = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.mal_id !== movieId));
  };
  const isFavourite = (movieId) => {
    return favourites.some((movie) => movie.mal_id === movieId);
  };
  const value = {
    favourites,
    addToFav,
    removeFav,
    isFavourite,
  };
  return (
    <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
  );
};
