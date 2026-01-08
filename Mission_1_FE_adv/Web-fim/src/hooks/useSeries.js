import { useEffect, useState } from "react";
import { getSeries, createSeries, deleteSeries } from "../services/api/series";

export default function useSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSeries = async () => {
    try {
      const { data } = await getSeries();
      setSeries(data);
    } catch (error) {
      console.error("Gagal fetch series:", error);
    } finally {
      setLoading(false);
    }
  };

  const addSeries = async (payload) => {
    const { data } = await createSeries(payload);
    setSeries((prev) => [data, ...prev]);
  };

  const removeSeries = async (id) => {
    await deleteSeries(id);
    setSeries((prev) => prev.filter((s) => s.id !== id));
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return { series, loading, addSeries, removeSeries, refetch: fetchSeries };
}
