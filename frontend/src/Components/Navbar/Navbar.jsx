import React, { useEffect, useState } from "react";
import "./Navbar.css"
import { FaAlignJustify } from "react-icons/fa";
import Sidebar from "../Sidemenu/Sidebar";
import {Link} from "react-router-dom"
const Navbar = () => {
  const [currentColor, setCurrentColor] = useState("red");
  const [showMediaicons,setShowMediaicons]= useState("false")
  const showSidebar = () => setShowMediaicons(!showMediaicons);

  useEffect(() => {
    const colors = ["red", "green", "white"];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 2000); // Change color every 2 seconds (2000 milliseconds)

    return () => clearInterval(interval);
  }, []);
  const handleToggleIcons = () => {
    setShowMediaicons(!showMediaicons);
    console.log("cliked")
  };
  return (
    <>
    <nav className="mainnav">
       {/* 1st logo part */}
       <div className="logotext">
       <h2>
        <span>C</span>ode
        <span>C</span>raft
      </h2>
       </div>
         
         {/* 2nd menu part */}

         <div className={ showMediaicons ? "headingnav mobilemenu" : "headingnav"}>
          <ul>
             <Link to="/">
             <p>
               Home
            </p>

             </Link>


<Link to="/about">
  <p>About</p>
</Link>


            <p>
               Courses
            </p>

            <p>
              Contact
            </p>
          </ul>

         </div>

         {/* 3rd menu part login  */}
         <div className="logindiv">
          <div>
            <button>Login</button>
          </div>
          <div>
          <button> Signup</button></div>
         </div>
        
         {/* <div className="sidemenu" onClick={showSidebar}>      
         <Link to="/sidesmenu">
             
          </Link>

             </div> */}
      </nav>
    </>
  );
};



export default Navbar
