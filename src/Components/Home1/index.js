import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home1 = ({ students, deleteStudent }) => {
 
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add student
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
               < th scope="col">class</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.Gender}</td>
                    <td>{student.classNum}</td>
                    <td>
                      <Link
                        to={`/edit/${student.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteStudent(student.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No students found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  students: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteStudent: (id) => {
    dispatch({ type: "DELETE_STUDENT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home1);