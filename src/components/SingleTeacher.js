import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import teacherService from '../services/TeacherService';
import { useDispatch, useSelector } from 'react-redux';
import { teachersSelector } from '../store/teacher/selector';
import { performGetSingleTeacher } from '../store/teacher/slice';

const SingleTeacher = () => {
    const params = useParams();
    const teacherId = parseInt(params.id);

    const history = useHistory();
    const dispatch = useDispatch();
    const teacher = useSelector(teachersSelector);

    useEffect(() => {
      dispatch(performGetSingleTeacher(teacherId));
    }, [])

  return (
    <div>
      <img src={teacher.single_teacher.image_url} alt="Image" className="teacher-img"></img>
      <p>Full name: {teacher.single_teacher.first_name} {teacher.single_teacher.last_name}</p>
      <p>Gradebook: <Link to="">{teacher.gradebook}</Link></p>
      <p>Broj ucenika treba da odradim tek, to povlaci iz dnevnika</p>
      <button type="button" className="btn btn-warning" onClick={() => {history.goBack()}}>Back</button>
    </div>
  )
}

export default SingleTeacher;