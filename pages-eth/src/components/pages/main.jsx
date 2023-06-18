import { Link } from "react-router-dom";
import News from "../news";
import { useEffect, useState } from "react";

function Main() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/articles/?start=1&quantity=3").then((resolve) => {
      resolve.json().then((response) => {
        response.map((article) => {
          article['content'] = article['content'].match(/[А-Яа-я, ]*\./);
          return article;
        })
        setArticles(response);
      });
    });
  }, []);

  return (
    <main className="main">
      <News articles={articles} />
      <Link to="/feed">
        <div className="linkable">Все новости королевств</div>
      </Link>
      <Link to="/feedback">
        <div className="linkable">Обратная связь</div>
      </Link>
    </main>
  );
}

export default Main;