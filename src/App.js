import "./App.css";
// import AboutUs from "./components/AboutUs";
// import Course from "./components/Course";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import SubjectTopics from "./components/SubjectTopics";
// import Login from "./components/Login";
// import ContactUs from "./components/ContactUs";
// import Error from "./components/Error";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
