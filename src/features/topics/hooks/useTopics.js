import { useEffect, useState } from "react";
import { getTopics } from "../api/topicService";

export function useTopics(page = 0) {
  const [topics, setTopics] = useState([]);
  const [meta, setMeta] = useState({
    page: 0,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    first: true,
    last: true,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const data = await getTopics({ page });

        setTopics(data.content || []);

        setMeta({
          page: data.number,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          size: data.size,
          first: data.first,
          last: data.last,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchTopics();
  }, [page]);

  return { topics, meta, loading };
}
