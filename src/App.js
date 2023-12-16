import './App.css';
import AboutUs from './components/AboutUs';
import Course from './components/Course';
import NavBar from './components/NavBar';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Course/>} ></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>} > </Route>
      </Routes>
    </div>
  );
}

export default App;
