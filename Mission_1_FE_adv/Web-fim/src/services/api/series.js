import { seriesApi } from "./client";

export const getSeries = () => seriesApi.get("/");
export const createSeries = (data) => seriesApi.post("/", data);
export const deleteSeries = (id) => seriesApi.delete(`/${id}`);
