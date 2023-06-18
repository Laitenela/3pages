import { useState, useEffect } from "react";
import FeedContainer from "../feedContainer";

function Feed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/articles/?start=1&quantity=5").then((resolve) => {
      resolve.json().then((response) => {
        setArticles(response);
      });
    });
  }, []);

  return (
    <main className="feed">
      <FeedContainer articles={articles} />
    </main>
  );
}

export default Feed;
