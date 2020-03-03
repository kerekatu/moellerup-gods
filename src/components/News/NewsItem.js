import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = ({ articles }) => {
  return (
    <>
      {articles.reverse().map(article => (
        <article
          className={
            article.articleId === articles.length
              ? 'news__item--highlight'
              : 'news__item'
          }
          key={article.articleId}
        >
          <img
            src={article.articleImg}
            alt={article.articleId}
            className="news__img"
          />
          <div className="news__text">
            <h2 className="heading-secondary">{article.articleTitle}</h2>
            <p className="news__paragraph">{article.articleContent}</p>
            <Link to={`/news/${article.articleId}`} className="news__link">
              {article.articleLink}
            </Link>
          </div>
        </article>
      ))}
    </>
  )
}

export default NewsItem
