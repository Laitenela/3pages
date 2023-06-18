import { Link } from "react-router-dom";
import News from "../components/containers/news";
import { useEffect, useState } from "react";

function Main({ fetchArticles }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(1, 3, changeArticles(setArticles));
  }, [fetchArticles]);

  return (
    <main className="main">
      {articles.length && (
        <>
          <News articles={articles} />

          <Link to="/feed">
            <div className="linkable">Все новости королевств</div>
          </Link>

          <Link to="/feedback">
            <div className="linkable">Обратная связь</div>
          </Link>
        </>
      )}
    </main>
  );
}

function changeArticles(cb) {
  return (articles) => {
    articles.map((article) => {
      article["content"] = article["content"].match(/[A-Za-zА-Яа-я, ]*./);
      return article;
    });

    cb(articles);
  };
}

export default Main;
