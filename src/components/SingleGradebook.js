import React from 'react';
import { useParams } from 'react-router-dom';

const SingleGradebook = () => {
    const params = useParams();
    const gradebookId = parseInt(params);
  return (
    <div>
      <p>Ovo je single gradebook</p>
    </div>
  )
}

export default SingleGradebook;
