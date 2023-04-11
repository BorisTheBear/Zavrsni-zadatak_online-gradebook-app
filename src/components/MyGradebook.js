import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import teacherService from '../services/TeacherService';
import { useState } from 'react';
import gradebookService from '../services/GradebookService';

const MyGradebook = () => {
    const [me, setMe] = useState({});

    const history = useHistory();

    useEffect(() => {
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

  if(!me.gradebook) {
    return <div>
      <h4>I have no gradebook assigned to me.</h4>
      <button
      type="button" 
      className="btn btn-warning" 
      onClick={() => {history.goBack()}}>
        Back</button>
    </div>
  }
  return (
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
      <h3>Gradebook: {me.gradebook.name}</h3>
      {me ?
      <h5>Teacher: {me.first_name} {me.last_name}</h5>
      : <h5>No teacher assigned</h5>}
      <br />
      <p><strong>Students:</strong></p>
      <div>
        {me.gradebook.students ?
        <ul className='li-no-bullets'>
          {me.gradebook.students.map((student) => {
            return (
            <li key={student.id}>{student.first_name} {student.last_name}</li>
            );
          })}
        </ul>
        : <p>There are no students in this gradebook.</p>}
      </div>
      <button type="button" className="btn btn-secondary" onClick={() => {history.goBack()}}>Back</button>
    </div>
  )
}

export default MyGradebook;
