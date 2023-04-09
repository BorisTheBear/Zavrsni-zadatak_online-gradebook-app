import React from 'react';
import { Link } from 'react-router-dom';

const TeacherCard = ({ teacher }) => {
  return (
    <div>
        <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={`${teacher.image_url}`} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <div className="card-body">
                <p className="card-text">Name: {teacher.first_name} {teacher.last_name}</p>
                <p className="card-text">Gradebook: {teacher.gradebook}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={`/teachers/${teacher.id}`}>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherCard;
