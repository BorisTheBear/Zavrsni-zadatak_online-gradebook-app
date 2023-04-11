import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { teachersSelector } from '../store/teacher/selector';
import { useEffect } from 'react';
import { performGetAllTeachers } from '../store/teacher/slice';
import gradebookService from '../services/GradebookService';

const CreateGradebook = () => {
    const [inputData, setInputData] = useState({
        name: "",
        user_id: ""
    });
    const [responseError, setResponseError] = useState({
      response: {
        data: {
          errors: {
            name: "",
            user_id: ""
          }
        }
      }
    });

    const nameError = responseError.response.data.errors.name;
    const userIdError = responseError.response.data.errors.user_id;

    const history = useHistory();
    const dispatch = useDispatch();
    const teachers = useSelector(teachersSelector);

    useEffect(() => {
      dispatch(performGetAllTeachers());
    }, []);

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          await gradebookService.create(inputData);
          history.push("/");
      } catch (err) {
          setResponseError(err);
      }
    };

  return (
    <div>
      <h2>Create new gradebook</h2>
      <br />
      <form onSubmit={handleSubmit} className="form">
        <ul>
          <li>
            <label htmlFor="name">Gradebook name:</label>
            <br />
            <input
              id="name"
              type="text"
              placeholder="Gradebook name"
              value={inputData.name}
              onChange={({ target }) => {
                setInputData({ ...inputData, name: target.value });
              }}
              required
            />
          </li>
          {nameError ? 
            <p style={{ color: "red" }}>{nameError}</p> :
            <br />
          }
          <li>
            <label htmlFor="prof">Select professor:</label>
            <br />
            <select id="prof" value="" onChange={({ target }) => {setInputData({...inputData, user_id: target.value})}}>
              <option value="">---Select professor---</option>
              {teachers.map((teacher) => {
                if(!teacher.gradebook) {
                  return (
                  <option key={teacher.id} value={teacher.id}>{teacher.first_name} {teacher.last_name}</option>
                  );
                }
              })}
            </select>
            {userIdError ? 
            <p style={{ color: "red" }}>{userIdError}</p> :
            <br />
            }
          </li>
          <li>
            <br />
            <button
              className="btn btn-warning"
              onClick={handleSubmit}
            >
              Create
            </button>
            &nbsp;&nbsp;
            <button
              className="btn btn-secondary"
              onClick={() => {history.push("/")}}
            >
              Cancel
            </button>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default CreateGradebook;
