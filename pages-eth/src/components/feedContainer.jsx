import Article from "./micro/article";

function FeedContainer({articles}) {
  return (
    <div className="feed__feed-conatainer feed-conatainer">
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

export default FeedContainer;
