import React, { useState, useEffect } from 'react';
import { getAllArticles } from '../../utils/api';
import { Link, useSearchParams } from 'react-router-dom';

const AllArticles = ({ selectedTopic }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const sortCriteria = searchParams.get('sort_by') || 'created_at'
  const sortOrder = searchParams.get('order') || 'desc'

  useEffect(() => {
    setLoading(true)
    setError(false)

    getAllArticles(selectedTopic, sortCriteria, sortOrder)
      .then((data) => {
        setArticles(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(true)
        setLoading(false)
      });
  }, [selectedTopic, sortCriteria, sortOrder, searchParams])


  const toggleSorting = (newSortCriteria) => {
    if (sortCriteria === newSortCriteria) {
      const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      setSearchParams({ sort_by: newSortCriteria, order: newOrder })
    } else {
      setSearchParams({ sort_by: newSortCriteria, order: 'desc' })
    }
  };
  

  if (loading) return <p>Loading....</p>

  if (error) return <p>Whoops, it all went wrong!!!</p>

  return (
    <div className="AllArticles">
      <div>
      <h2>Topics</h2>
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
      <div>
        <h2>Sort by:</h2>
        <button
          className={`asc ${sortCriteria === 'created_at' ? 'active' : ''}`}
          onClick={() => toggleSorting('created_at')}
        >
          Date
          <span className="up-arrow"></span>
        </button>
        <button
          className={`asc ${sortCriteria === 'votes' ? 'active' : ''}`}
          onClick={() => toggleSorting('votes')}
        >
          Votes
          <span className="up-arrow"></span> 
        </button>
        <button
          className={`asc ${sortCriteria === 'comment_count' ? 'active' : ''}`}
          onClick={() => toggleSorting('comment_count')}
        >
          Comment Count
          <span className="up-arrow"></span> 
        </button>
      </div>
      {articles.map((article) => {
        return (
          <div key={article.title}>
            <h2>
              <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
            </h2>
            <img id="article-img" src={article.article_img_url} alt={article.title} />
            <p>{article.author}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AllArticles;