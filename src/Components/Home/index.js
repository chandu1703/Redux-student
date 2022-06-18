import React from "react";
import { Link } from "react-router-dom";
 

const Home = () => {
  return (
    <div className="container">
       <div className="row d-flex flex-column">
      <Link to="/studentsDetails" className="btn btn-outline-dark my-5 ml-auto ">
          Show students
        </Link>
        </div>
      </div>
  )
}
export default Home;