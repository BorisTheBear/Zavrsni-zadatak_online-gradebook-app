import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { singleGradebookSelector } from '../store/gradebook/selector';
import { useEffect } from 'react';
import { performGetSingleGradebook } from '../store/gradebook/slice';

const SingleGradebook = () => {
    const params = useParams();
    const gradebookId = parseInt(params.id);

    const history = useHistory();
    const dispatch = useDispatch();
    const gradebook = useSelector(singleGradebookSelector);

    useEffect(() => {
      dispatch(performGetSingleGradebook(gradebookId));
    }, []);

  if(!gradebook.students) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }
  return (
    <div>
      <h3>Gradebook: {gradebook.name}</h3>
      {gradebook.user ?
      <h5>Teacher: {gradebook.user.first_name} {gradebook.user.last_name}</h5>
      : <h5>No teacher assigned</h5>}
      <br />
      <p><strong>Students:</strong></p>
      <div>
        <ul className='li-no-bullets'>
          {gradebook.students.map((student) => {
            return (
            <li key={student.id}>{student.first_name} {student.last_name}</li>
            );
          })}
        </ul>
      </div>
      <button type="button" className="btn btn-warning" onClick={() => {history.goBack()}}>Back</button>
    </div>
  )
}

export default SingleGradebook;
