import React, { useState, useEffect } from 'react'
import { updateVote } from '../utils/api'
import { useParams } from 'react-router-dom'

const Votes = ({passedVote}) => {
  const { id } = useParams()
  const [votes, setVotes] = useState(passedVote)
  const [loading, setLoading]= useState(false)
  const [error, setError] = useState(false)


  const handleVote = (typeOfVote) => {
    setLoading(true);
    setError(false);

    updateVote(id, typeOfVote)
      .then((updatedVotes) => {
        setVotes(updatedVotes);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  };

  if (loading) return <p>Loading votes</p>
  if (error) return <p>Whoops, it all went wrong!!!</p>;


  return (
    <div>
      <p>Votes: {votes}</p>
      <button onClick={() => handleVote('upvote')}>Like</button>
      <button onClick={() => handleVote('downvote')}>Dislike</button>
    </div>
  )
}

export default Votes