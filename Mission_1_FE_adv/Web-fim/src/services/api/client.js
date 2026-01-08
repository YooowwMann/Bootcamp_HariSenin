import axios from "axios";

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const filmsApi = baseApi.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/films`,
});

export const seriesApi = baseApi.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/series`,
});
