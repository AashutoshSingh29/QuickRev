import {React,useState} from 'react'
import { Link } from 'react-router-dom';

const NavBar = () =>{

  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNavbar = () => {
    setNavVisibility(!isNavVisible);
  };
  return (
    <div className='container-fluid'>
      <nav className='navbar'>     
      <div className="menu">
        
        <label className="logo">
              <a href="/">
                <img
                  src="/nameIcon6.png"
                  alt="Company Logo"
                  // width="50"
                  // height="50"
                  
                />
              </a>
            </label>
            <ul className={`listItems ${isNavVisible ? 'visible' : ''}`}>
            <li className='companyName'><a href="/">QuickRev</a></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>

          </ul><ul>

            <div className="bars-icon" onClick={toggleNavbar} >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div> 
        </ul>    
        
      </div>
      </nav>
       
    </div>
  )

  // function toggleNavbar() {
  //   var navbar = document.querySelectorAll('.listItems');
  //   navbar.forEach(item => {
  //   item.classList.toggle('visible');
  // });
  // }
}

export default NavBar;