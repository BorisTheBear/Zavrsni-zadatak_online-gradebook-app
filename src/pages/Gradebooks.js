import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gradebookService from "../services/GradebookService";
import { format } from "date-fns";

const Gradebooks = () => {
  const [gradebooks, setGradebooks] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    const fetchGradebooks = async () => {
      //ispred zagrada dodati async kad povezem sa apijem
      const data = await gradebookService.getAll(); //ispred servisa dodati await

      setGradebooks(data.data); //ovde ide data.data u zagradi
    };
    fetchGradebooks();
  }, []);

  const handleFilterBar = (event) => {
    setFilterTerm(event.target.value);
  };

  const handleFilterButton = (event) => {
    event.preventDefault();
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
              <strong>Created at:</strong> {format(new Date(gradebook.created_at), "dd-MM-yyyy")}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Gradebooks;