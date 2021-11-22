import React from "react";

// Components
import ArticleComp from "./Article";
import Grid from "./Grid";

// Hook
import { useNewsFetch } from "../hooks/useNewsFetch";

const News = () => {
  const { state, loading, error, searchTerm, setSearchTerm } = useNewsFetch();

  console.log("IN NEWS.js");

  return (
    <Grid>
      {state.articles.map((article, index) => {

        return (
          <ArticleComp
            key={index}
            name={article.source.name}
            author={article.author}
            title={article.title}
            description={article.description}
            img={article.urlToImage}
            url={article.url}
            content={article.content}
          ></ArticleComp>
        );
      })}
    </Grid>

    /*
      [id, name],
  author,
  title,
  description,
  urlToImage,
  content
  */
  );
};

export default News;
