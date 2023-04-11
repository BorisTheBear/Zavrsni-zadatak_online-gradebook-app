import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gradebookService from "../services/GradebookService";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { gradebooksSelector } from "../store/gradebook/selector";
import {
  performGetAllGradebooks,
  resetGradebooksState,
} from "../store/gradebook/slice";

const Gradebooks = () => {
  const [filterTerm, setFilterTerm] = useState("");

  const dispatch = useDispatch();

  const gradebooksData = useSelector(gradebooksSelector);

  useEffect(() => {
    dispatch(performGetAllGradebooks({ page: 1, name: filterTerm }));
    return () => {
      dispatch(resetGradebooksState());
    };
  }, []);

  const handleFilterBar = (event) => {
    setFilterTerm(event.target.value);
  };

  const handleFilterButton = (event) => {
    event.preventDefault();
    dispatch(performGetAllGradebooks({ page: 1, name: filterTerm }));
  };

  const handleLoadMore = () => {
    const nextPage = gradebooksData.current_page + 1;
    dispatch(performGetAllGradebooks({ page: nextPage, name: filterTerm }));
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
      {gradebooksData.data
        ? gradebooksData.data.map((gradebook) => {
            return (
              <div key={gradebook.id}>
                <p>
                  <strong>Gradebook name:</strong>{" "}
                  <Link to={`/gradebooks/${gradebook.id}`}>
                    {gradebook.name}
                  </Link>
                </p>
                <p>
                  <strong>Teacher:</strong>{" "}
                  {gradebook.user ?
                  <Link to={`/teachers/${gradebook.user.id}`}>
                    {gradebook.user.first_name} {gradebook.user.last_name}
                  </Link>
                  : "No teacher assigned"}
                </p>
                <p>
                  <strong>Created at:</strong>{" "}
                  {format(new Date(gradebook.created_at), "dd-MM-yyyy")}
                </p>
                <hr />
              </div>
            );
          })
        : "There are no gradebooks"}
      <br />
      {gradebooksData.current_page ===
      gradebooksData.last_page ? null : (
        <button className="btn btn-warning" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Gradebooks;
