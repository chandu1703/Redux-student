import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddPost = ({ students, addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [classNum,setClassNum]=useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     

    const data = {
      id: students.length > 0 ? students[students.length - 1].id + 1 : 0,
      age,
      name,
      Gender,
      classNum
    };

    addStudent(data);
    toast.success("Contact added successfully!!");
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Gender"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="class"
                value={classNum}
                onChange={(e) => setClassNum(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  students: state,
});
const mapDispatchToProps = (dispatch) => ({
  addStudent: (data) => {
    dispatch({ type: "ADD_STUDENT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);