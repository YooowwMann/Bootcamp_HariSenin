import { filmsApi } from "./client";

export const getFilms = () => filmsApi.get("/");
export const createFilm = (data) => filmsApi.post("/", data);
export const deleteFilm = (id) => filmsApi.delete(`/${id}`);
