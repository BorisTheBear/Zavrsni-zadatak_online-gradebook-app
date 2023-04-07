import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import teacherService from '../services/TeacherService';

const SingleTeacher = () => {
    const params = useParams();
    const teacherId = parseInt(params.id);

    const [teacher, setTeacher] = useState(
        teacherService.get(teacherId)
    );

    const history = useHistory();

  return (
    <div>
      <img src={teacher.image_url} alt="Thumbnail" className="teacher-img"></img>
      <p>Full name: {teacher.name}</p>
      <p>Gradebook: <Link to="">{teacher.gradebook}</Link></p>
      <p>Broj ucenika treba da odradim tek, to povlaci iz dnevnika</p>
      <button type="button" className="btn btn-warning" onClick={() => {history.goBack()}}>Back</button>
    </div>
  )
}

export default SingleTeacher;