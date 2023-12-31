import React, { useEffect, useState, useContext } from 'react';
import { getCommentsByArticle } from '../../utils/api';
import {useParams} from 'react-router-dom'
import NewComment from './AddComment';
import {UserContext} from '../User/UserContext';
import { deleteComment } from '../../utils/api';

const Comments = () => {
  const [comments, setComments] = useState([])
  const {user, setUser} = useContext(UserContext)
  const [loading, setLoading] = useState(true)
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

  
  const updateComments = (additionalComment) => {
    setComments((currentComments) => {
      return [additionalComment, ...currentComments]
    })
  }
  const handleDelete = (id) => {
        setComments((currentComments) =>
         currentComments.filter((comment) => comment.comment_id !== id)
        );
        deleteComment(id)
      .then(() => {
      })
    }
  if (loading) return <p>Loading comments....</p>

  if (error) return <p>Unable to load comments.</p>
console.log(comments)
  return (
   <div className='commentsById-div'>
      <NewComment 
      updateComments={(comment) => {
        updateComments(comment)
      }}
       id={id} 
       user={user} />
    {comments.map((comment) => {
        return <div key={comment.comment_id} className='commentsCard-div'>
            <h2>Comments:</h2>
            <p>{comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Commented: {comment.created_at}</p>
            {user === comment.author && (
              <button onClick={() => handleDelete(comment.comment_id)}>
                Delete
              </button>
            )}

        </div>
    })}
   </div>
  )
}

export default Comments