import { useState, useEffect } from "react";

const key = "3ac0b09d";

export const useMovies = (query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
          {
            signal: controller.signal,
          }
        );

        const data = await res.json();
        console.log(data);
        console.log(data.Response);
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovies(data.Search);
      } catch (error) {
        console.log(error.message);
        if (error.name !== "AbortError") setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
};
