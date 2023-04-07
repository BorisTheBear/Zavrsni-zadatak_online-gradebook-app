import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeacherCard from '../components/TeacherCard';
import teacherService from '../services/TeacherService';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [filterTerm, setFilterTerm] = useState("");

    useEffect(() => {
        const fetchTeachers = () => { //ispred zagrada dodati async kad povezem sa apijem
          const data = teacherService.teachersArray(); //ispred servisa dodati await
    
          setTeachers(data); //ovde ide data.data u zagradi
        }
        fetchTeachers();
      }, []);
    
      const handleFilterBar = (event) => {
        setFilterTerm(event.target.value);
      }
    
      const handleFilterButton = (event) => {
        event.preventDefault();
        console.log(filterTerm);
        console.log(teacherService.get(3));
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
                    {teachers.map((teacher) => {
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
