
import React from "react";
import { Route ,Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./Components/AddStudent";
import EditStudent from "./Components/EditStudent";
import Home from "./Components/Home";
import Home1 from "./Components/Home1";
import Navbar from "./Components/Navbar";

// import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/studentsDetails" element={<Home1/>}/>
      <Route  path="/add" element={<AddPost/>} />
      <Route  path="/edit/:id" element={<EditStudent/>} />
    </Routes>
    </div>
  );
};
export default App;