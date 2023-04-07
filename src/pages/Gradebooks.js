import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gradebookService from "../services/GradebookService";

const Gradebooks = () => {
  const [gradebooks, setGradebooks] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    const fetchGradebooks = () => {
      //ispred zagrada dodati async kad povezem sa apijem
      const data = gradebookService.gradebookArray(); //ispred servisa dodati await

      setGradebooks(data); //ovde ide data.data u zagradi
    };
    fetchGradebooks();
  }, []);

  const handleFilterBar = (event) => {
    setFilterTerm(event.target.value);
  };

  const handleFilterButton = (event) => {
    event.preventDefault();
    console.log(filterTerm);
  };

  return (
    <div>
      <h2>Gradebooks</h2>
      <br />
      <form className="filter" role="search">
        <input
          type="search"
          placeholder="Filter gradebooks"
          aria-label="Search"
          value={filterTerm}
          onChange={handleFilterBar}
        />
        <button className="btn btn-warning" onClick={handleFilterButton}>
          Filtriraj
        </button>
      </form>
      <hr />
      {gradebooks.map((gradebook) => {
        return (
          <div key={gradebook.id}>
            <p>
              <strong>Gradebook name:</strong>{" "}
              <Link to={`/gradebooks/${gradebook.id}`}>{gradebook.name}</Link>
            </p>
            <p>
              <strong>Teacher:</strong>{" "}
              <Link to={`/teachers/${gradebook.id}`}>{gradebook.teacher}</Link>
            </p>
            <p>
              <strong>Created at:</strong> {gradebook.created_at}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Gradebooks;