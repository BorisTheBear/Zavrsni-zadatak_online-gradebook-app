import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singleTeacherSelector } from '../store/teacher/selector';
import { performGetSingleTeacher } from '../store/teacher/slice';

const SingleTeacher = () => {
    const params = useParams();
    const teacherId = parseInt(params.id);

    const history = useHistory();
    const dispatch = useDispatch();
    const teacher = useSelector(singleTeacherSelector);

    useEffect(() => {
      dispatch(performGetSingleTeacher(teacherId));
    }, [])

    if(!teacher.gradebook) {
      return (
      <div>
      <img src={teacher.image_url} alt="Image" className="teacher-img"></img>
      <p>Full name: {teacher.first_name} {teacher.last_name}</p>
      <p>Gradebook: No gradebook, professor available</p>
      <p>Number of students: N/A</p>
      <button type="button" className="btn btn-warning" onClick={() => {history.goBack()}}>Back</button>
      </div>
    )}

  return (
    <div>
      <img src={teacher.image_url} alt="Image" className="teacher-img"></img>
      <p>Full name: {teacher.first_name} {teacher.last_name}</p>
      <p>Gradebook: <Link to={`/gradebooks/${teacher.gradebook.id}`}>{teacher.gradebook.name}</Link></p>
      <p>Number of students: {teacher.gradebook.students_count}</p>
      <button type="button" className="btn btn-warning" onClick={() => {history.goBack()}}>Back</button>
    </div>
  )
}

export default SingleTeacher;