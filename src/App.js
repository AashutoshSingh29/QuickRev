import './App.css';
import AboutUs from './components/AboutUs';
import Course from './components/Course';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import {
  Route,
  Routes
} from "react-router-dom";
import SubjectTopics from './components/SubjectTopics';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Course/>} ></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>} > </Route>
        <Route path="/oops" element={<SubjectTopics/>} > </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
