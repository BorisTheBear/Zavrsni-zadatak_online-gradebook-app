import React from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import gradebookService from '../services/GradebookService';

const AddStudent = () => {
    const params = useParams();
    const gradebookId = parseInt(params.id);
    const history = useHistory();

    const [studentData, setStudentData] = useState({
        first_name: "",
        last_name: "",
        image_url: "",
        gradebook_id: gradebookId
    });

    const [responseError, setResponseError] = useState({
        response: {
          data: {
            errors: {
                first_name: "",
                last_name: "",
                image_url: "",
                gradebook_id: ""
            }
          }
        }
    });

    const firstNameError = responseError.response.data.errors.first_name;
    const lastNameError = responseError.response.data.errors.last_name;
    const imageError = responseError.response.data.errors.image_url;
    const gradebookError = responseError.response.data.errors.gradebook_id;

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await gradebookService.addStudent(studentData);
            history.goBack();
        } catch (error) {
            setResponseError(error);
        }
        
    }

  return (
    <div>
      <h2>Add a student to gradebook</h2>
      <br />
      <form onSubmit={handleSubmit} className="form">
        <ul>
          <li>
            <label htmlFor="first_name">Student name:</label>
            <br />
            <input
              id="first_name"
              type="text"
              placeholder="Student first name"
              value={studentData.first_name}
              onChange={({ target }) => {
                setStudentData({ ...studentData, first_name: target.value });
              }}
              required
            />
          </li>
          {firstNameError ? 
            <p style={{ color: "red" }}>{firstNameError}</p> :
            <br />
          }
          <li>
            <label htmlFor="last_name">Student last name:</label>
            <br />
            <input
              id="last_name"
              type="text"
              placeholder="Student last name"
              value={studentData.last_name}
              onChange={({ target }) => {
                setStudentData({ ...studentData, last_name: target.value });
              }}
              required
            />
          </li>
          {lastNameError ? 
            <p style={{ color: "red" }}>{lastNameError}</p> :
            <br />
          }
          <li>
            <label htmlFor="student_img_url">Student image URL:</label>
            <br />
            <input
              id="student_img_url"
              type="text"
              placeholder="Student image URL"
              value={studentData.image_url}
              onChange={({ target }) => {
                setStudentData({ ...studentData, image_url: target.value });
              }}
              required
            />
          </li>
          {imageError ? 
            <p style={{ color: "red" }}>{imageError}</p> :
            <br />
          }
          <li>
            <br />
            <button
              className="btn btn-warning"
              onClick={handleSubmit}
            >
              Submit
            </button>
            &nbsp;&nbsp;
            <button
              className="btn btn-secondary"
              onClick={() => {history.push("/")}}
            >
              Cancel
            </button>
          </li>
          {gradebookError ? 
            <p style={{ color: "red" }}>{gradebookError}</p> :
            <br />
          }
        </ul>
      </form>
    </div>
  )
}

export default AddStudent;
