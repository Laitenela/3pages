import Article from "../micro-components/article";

function News({ articles }) {
  return (
    <div className="news-block">
      {articles.map((data) => (
        <Article
          id={data.id}
          heading={data.heading}
          content={data.content}
          date={data.date}
        />
      ))}
    </div>
  );
}

export default News;
