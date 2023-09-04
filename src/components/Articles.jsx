import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const AllArticles = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios.get('https://aminah-api.onrender.com/api/articles')
        .then((response) => {
            setArticles(response.data.articles)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
            setError(true)
          })
    }, [])

    if (loading) return <p>Loading....</p>;

    if (error) return <p>Whoops, it all went wrong!!!</p>;

    return (
        <div>
            <h1>All Articles</h1>
                {articles.map((article) => { 
                    return <div key={article.id}>
                     <h2>{article.title}</h2>
                     </div>
                })}
        </div>
    )
}

export default AllArticles