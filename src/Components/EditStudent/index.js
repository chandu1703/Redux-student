import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const EditStudent = ({ students, updateStudent }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentStudent = students.find(
    (students) => students.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentStudent.name);
    setAge(currentStudent.age);
    setGender(currentStudent.Gender);
    setClassNum(currentStudent.classNum);
  }, [currentStudent]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [classNum, setClassNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      id: currentStudent.id,
      age,
      name,
      Gender,
      classNum,
    };

    updateStudent(data);
    toast.success("Contact updated successfully!!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentStudent ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={age}
                  placeholder={"age"}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={Gender}
                  placeholder={"Gender"}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={classNum}
                  placeholder={"class"}
                  onChange={(e) => setClassNum(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update student
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No student Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  students: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateStudent: (data) => {
    dispatch({ type: "UPDATE_STUDENT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);