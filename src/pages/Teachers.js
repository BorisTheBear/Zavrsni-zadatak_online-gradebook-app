import React, { useEffect, useState } from 'react';
import TeacherCard from '../components/TeacherCard';
import teacherService from '../services/TeacherService';
import { useDispatch, useSelector } from 'react-redux';
import { teachersSelector } from '../store/teacher/selector';
import { performGetAllTeachers } from '../store/teacher/slice';

const Teachers = () => {
    const [filterTerm, setFilterTerm] = useState("");

    const dispatch = useDispatch();

    const teachersData = useSelector(teachersSelector);

    useEffect(() => {
      dispatch(performGetAllTeachers({ page: 1, name: filterTerm }));
    }, []);
    
      const handleFilterBar = (event) => {
        setFilterTerm(event.target.value);
      }
    
      const handleFilterButton = (event) => {
        event.preventDefault();
        dispatch(performGetAllTeachers({ page: 1, name: filterTerm }));
      }
  if(!teachersData) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }
  return (
    <div>
      <h2>Professors</h2>
        <br />
        <form className="filter" role="search">
          <input
          type="search"
          placeholder="Filter teachers"
          aria-label="Search"
          value={filterTerm}
          onChange={handleFilterBar}
          />
          <button className="btn btn-warning" onClick={handleFilterButton}>Filtriraj</button>
        </form>
        <hr />
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {teachersData.map((teacher) => {
                        return (
                            <div className="col" key={teacher.id}>
                                <TeacherCard teacher={teacher} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teachers;
