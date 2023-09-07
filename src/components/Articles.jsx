import React, { useState, useEffect } from 'react';
import { getAllArticles } from '../utils/api';
import { Link } from 'react-router-dom';
import Votes from './Votes';

const AllArticles = ({ selectedTopic }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getAllArticles(selectedTopic) 
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching articles:', err);
        setError(true);
        setLoading(false);
      });
  }, [selectedTopic]);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Whoops, it all went wrong!!!</p>;

  return (
    <div className="AllArticles">
      <div>
      <Link to="/topics/coding">
        <button>Coding</button>
        </Link>
        <Link to="/topics/cooking">
        <button>Cooking</button>
        </Link>
        <Link to="/topics/football">
        <button>Football</button>
        </Link>
      </div>
      {articles.map((article) => {
        return (
          <div key={article.title}>
            <h2>
              <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
            </h2>
            <img id="article-img" src={article.article_img_url} alt={article.title} />
            <p>{article.author}</p>
            <Votes passedVote={article.votes} />
          </div>
        );
      })}
    </div>
  );
}

export default AllArticles;