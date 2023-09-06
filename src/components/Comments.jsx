import React, { useEffect, useState } from 'react';
import { getCommentsByArticle } from '../utils/api';
import {useParams} from 'react-router-dom'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    setLoading(true)
    setError(false)

    getCommentsByArticle(id)
      .then((data) => {
        setComments(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(true);
      })
  }, [id])

  if (loading) return <p>Loading comments....</p>

  if (error) return <p>Unable to load comments.</p>


  return (
   <div className='commentsById-div'>
    {comments.map((comment) => {
        return <div key={comment.comment_id} className='commentsCard-div'>
            <h2>Comments:</h2>
            <p>{comment.body}</p>
            <p>Author: {comment.author}</p>4
            <p>Commented: {comment.created_at}</p>
            
        </div>
    })}
   </div>
  )
}

export default Comments