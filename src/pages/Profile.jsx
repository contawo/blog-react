import {useContext} from 'react';
import Navigation from '../components/Navigation';
import {BlogContext} from '../context/BlogContext';
import image from "../asserts/blue.png";
import {auth} from "../firebase/firebaseConfig";
import {signOut} from "firebase/auth";
import {useNavigate, Navigate} from "react-router-dom"

const Profile = () => {
  const {username, userEmail, setUserLogin, userLogin} = useContext(BlogContext); 
  const navigate = useNavigate()

  const signOutUser = () => {
    signOut(auth).then(() => {
      setUserLogin(false)
      navigate("/")
    })
  }

  const protectedRoute = () => {
    if(!userLogin) {
      return <Navigate to="/login" />
    }
  }

  return (
    <div className="profile">
      {protectedRoute()}
      <Navigation />
      <main className="profile-content">
        <h2 className="profile-content-title">Profile</h2>
        <div className="profile-content-main">
          <div className="profile-content-main-banner" style={{backgroundImage: `url(${image})`}}></div>
          <div className="profile-content-main-details">
            <h3>{username}</h3>
            <p>{userEmail}</p>
            <button onClick={signOutUser} style={{cursor: "pointer"}}>Logout</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
