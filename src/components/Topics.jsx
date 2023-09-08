import React from 'react';
import Articles from './Articles/Articles';
import { useParams } from 'react-router-dom';

function Topics() {
  const { topic } = useParams();
  
  return (
    <div>
      <h1>Articles by {topic}</h1>
      <Articles selectedTopic={topic} />
    </div>
  );
}

export default Topics;