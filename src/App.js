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
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Course/>} ></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>} > </Route>
        <Route path="/oops" element={<SubjectTopics subject='oops' />} > </Route>
        <Route path="/javascript" element={<SubjectTopics subject='javascript' />} > </Route>
        <Route path="/os" element={<SubjectTopics subject='os' />} > </Route>
        <Route path="/linux" element={<SubjectTopics subject='linux' />} > </Route>
        <Route path='/login' element={<Login/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
