import { createContext, PropsWithChildren, useState, FC } from 'react';

export type Movie = {
  name: string;
  description: string;
};

export type MovieContextType = {
  movieList: Movie[];
  addMovie: (movie: Movie) => void;
  updateMovie: (id: number, data: Movie) => void;
  deleteMovie: (id: number) => void;
};

export const movieContext = createContext<MovieContextType>({
  movieList: [],
  addMovie: () => null,
  updateMovie: () => null,
  deleteMovie: () => null,
});

const MovieProvider: FC<PropsWithChildren> = ({ children }) => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
    setMovieList((list) => [...list, movie]);
  };

  const updateMovie = (id: number, data: Movie) => {
    movieList.filter((movie, index) => {
      if (index === id) {
        movie.name = data.name;
        movie.description = data.description;
        setMovieList([...movieList]);
      }
    });
  };

  const deleteMovie = (id: number) => {
    const arr = [...movieList];
    arr.splice(id, 1);
    setMovieList([...arr]);
  };

  return (
    <movieContext.Provider
      value={{ addMovie, movieList, updateMovie, deleteMovie }}
    >
      {children}
    </movieContext.Provider>
  );
};

export { MovieProvider };
