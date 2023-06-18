import { useState, useEffect } from "react";
import FeedContainer from "../components/containers/feedContainer";

function Feed({ fetchArticles }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(1, 5, setArticles);
  }, [fetchArticles]);

  return (
    <main className="feed">
      <FeedContainer articles={articles} />
    </main>
  );
}

export default Feed;
