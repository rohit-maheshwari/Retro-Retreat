import { useState, useEffect } from "react";

import API from "../API";

const initialState = {
  total_results: 0,
  total_pages: 0,
  page: 0,
  articles: [],
};

export const useNewsFetch = () => {
  const [searchTerm, setSearchTerm] = useState("UN-GOALS");
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (searchTerm, pageSize) => {
    try {
      const news = await API.fetchNews(searchTerm, pageSize);

      setState((prev) => ({
        ...prev,
        articles: news.articles,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Initial load
  useEffect(() => {
    setState(initialState);
    fetchNews(searchTerm, 20);
  }, [searchTerm]);

  return { state, loading, error, searchTerm, setSearchTerm };
};
