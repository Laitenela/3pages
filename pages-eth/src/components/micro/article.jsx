function Article({id, heading, content, date}) {
  return (
    <a className="article" href={id}>
      <div className="article-container">
        <h2 className="article-container__heading">{heading}</h2>
        <p className="article-container__content">{content}</p>
        <div className="article-container__date">{date}</div>
      </div>
    </a>
  );
}

export default Article;