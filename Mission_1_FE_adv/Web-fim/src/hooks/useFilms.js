import { useEffect, useState } from 'react';
import {
  getFilms,
  createFilm,
  deleteFilm,
} from '../services/api/films';

export function useFilms() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFilms = async () => {
    setLoading(true);
    try {
      const { data } = await getFilms();
      setFilms(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const addFilm = async (payload) => {
    const { data } = await createFilm(payload);
    setFilms((prev) => [data, ...prev]);
  };


  const removeFilm = async (id) => {
    await deleteFilm(id);
    setFilms((prev) => prev.filter((f) => f.id !== id));
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return {
    films,
    loading,
    error,
    addFilm,
    removeFilm,
  };
}
