import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { singleGradebookSelector } from '../store/gradebook/selector';
import { useEffect } from 'react';
import { performGetSingleGradebook } from '../store/gradebook/slice';
import { useState } from 'react';
import teacherService from '../services/TeacherService';
import gradebookService from '../services/GradebookService';

const SingleGradebook = () => {
    const [me, setMe] = useState({});
    const params = useParams();
    const gradebookId = parseInt(params.id);

    const history = useHistory();
    const dispatch = useDispatch();
    const gradebook = useSelector(singleGradebookSelector);

    useEffect(() => {
      dispatch(performGetSingleGradebook(gradebookId));
      const fetchMe = async () => {
        const meLoggedIn = await teacherService.getMe();
        setMe(meLoggedIn);
      };
      fetchMe();
    }, []);

    const handleDelete = async (id) => {
      await gradebookService.delete(id);
      history.push('/');
  }

  return (
    <div>
      {me.id === gradebook.user_id ?
      <div>
        <button
        type="button" 
        className="btn btn-warning add-student" 
        onClick={() => {history.push(`/gradebooks/${me.gradebook.id}/students/create`)}}>
        Add student
        </button>
        <button
        type="button" 
        className="btn btn-warning add-student" 
        onClick={() => {history.push(`/gradebooks/${me.gradebook.id}/edit`)}}>
        Edit
        </button>
        <button
        type="button" 
        className="btn btn-danger add-student" 
        onClick={() => {handleDelete(me.gradebook.id)}}>
        Delete
        </button>
      </div>
      : null}
      {!gradebook.user ? 
      <div>
        <button
        type="button" 
        className="btn btn-warning add-student" 
        onClick={() => {history.push(`/gradebooks/${gradebook.id}/edit`)}}>
        Edit
        </button>
      </div>
      : null}
      <h3>Gradebook: {gradebook.name}</h3>
      {gradebook.user ?
      <h5>Teacher: {gradebook.user.first_name} {gradebook.user.last_name}</h5>
      : <h5>No teacher assigned</h5>}
      <br />
      <p><strong>Students:</strong></p>
      <div>
        {gradebook.students ?
        <ul className='li-no-bullets'>
          {gradebook.students.map((student) => {
            return (
            <li key={student.id}>{student.first_name} {student.last_name}</li>
            );
          })}
        </ul>
        : <p>There are no students in this gradebook.</p>}
      </div>
      <button type="button" className="btn btn-warning" onClick={() => {history.goBack()}}>Back</button>
    </div>
  )
}

export default SingleGradebook;
