import {NavLink} from "react-router-dom";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsUiRadios } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import {BlogContext} from "../context/BlogContext";
import {useContext} from "react";
import { CgProfile } from "react-icons/cg";
import { BiLogInCircle } from "react-icons/bi";

const Navigation = () => {
    const {setTheme, isClicked, setIsClicked, userLogin} = useContext(BlogContext);
    
    return (
      <div className="nav">
        <div className="nav-main">
          <NavLink to="/" className="nav-main-link">
              <BsHouseDoorFill />
          </NavLink>
          <NavLink to="/blogs" className="nav-main-link">
              <BsUiRadios />
          </NavLink>
          {
            userLogin ? <NavLink to="/profile" className="nav-main-link">
            <CgProfile />
        </NavLink> : <NavLink to="/login" className="nav-main-link">
              <BiLogInCircle />
          </NavLink>
          }
          
        </div>
        <div className="nav-themes">
          <div className={`nav-themes-theme ${isClicked ? "theme-clicked" : ""}`} onClick={() => {
            setTheme("light")
            setIsClicked(true)
          }}>
              <BsFillBrightnessHighFill />
          </div>
          <div className={`nav-themes-theme ${isClicked ? "" : "theme-clicked"}`} onClick={() => {
            setTheme("dark")
            setIsClicked(false)
          }}>
              <BsMoonFill />
          </div>
        </div>
      </div>
  )
}

export default Navigation;
