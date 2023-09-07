import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { singleArticle } from '../utils/api'
import { Link } from 'react-router-dom'
import Votes from './Votes'



const IndividualArticle = () => {
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)

        singleArticle(id)
        .then((data) => {
            setArticle(data)
            setLoading(false)
        })
        .catch((error) => {
            setError(true)
        })
        
    }, [id])
    
    if (loading) return <p>Loading....</p>;

    if (error) return <p>Whoops, it all went wrong!!!</p>;

    return(
        <div>
            <h1>{article.title}</h1>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Created At: {article.created_at}</p>
            <img src={article.article_img_url} alt={article.title}/>
            <p>{article.body}</p>
            <Votes passedVote={article.votes}/>
            <Link to={`/articles/${id}/comments`}>Comments</Link>
    

        </div>
    )
}

export default IndividualArticle