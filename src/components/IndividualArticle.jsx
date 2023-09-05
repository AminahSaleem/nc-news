import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { singleArticle, getCommentsByArticle, articleVotes } from '../utils/api'


const IndividualArticle = () => {
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [votes, setVotes] = useState(0);
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
        getCommentsByArticle(id)
      .then((data) => {
        setComments(data)
      })
      .catch((error) => {
      
      })
    }, [id])
    
    const increasedVote = () => {
        setVotes(votes +1)
        articleVotes(id, 'upvote')
        .catch((error) => {
            setVotes(votes)
            setError(true)
        })
    }
    const decreasedVote = () => {
        setVotes(votes -1)
        articleVotes(id, 'downvote')
        .catch((error) => {
            setVotes(votes)
            setError(true)
        })
    }

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

            <h2>Comments:</h2>
            {comments.map((comment) => (
                <li>
                    <p>{comment.body}</p>
                    <p>{comment.author}</p>
                    <p>{comment.created_at}</p>
                </li>
            ))}

            <p>Votes: {votes}</p>
            <button onClick={increasedVote}>Like</button>
            <button onClick={decreasedVote}>Dislike</button>
  
        </div>
    )
}

export default IndividualArticle
