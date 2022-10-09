import {useContext} from 'react';
import {BlogContext} from "../context/BlogContext";
import {Link} from "react-router-dom";

const UserLogin = () => {
    const {userLogin, username} = useContext(BlogContext);
  return (
    <div className="user-login">
      {userLogin ? <div className="user-login-username">{username}</div> : <Link to="/login" className="user-login-content">Login</Link>}
    </div>
  )
}

export default UserLogin;
