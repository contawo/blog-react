import {useContext} from 'react';
import {BlogContext} from "../context/BlogContext";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Navigation from '../components/Navigation';

const Login = () => {
    const signInWithGoogleFunction = () => {
        alert("Sign in with Google")
    }
    const signInWithGithubFunction = () => {
        alert("Sign in with Github")
    }
  return (
    <div className="login">
        <Navigation />
        <main className="login-container">
            <h2>Login</h2>
            <div className="login-container-content">
                <div className="login-container-content-company" onClick={signInWithGoogleFunction} style={{cursor: "pointer"}}>
                    <div className="login-container-content-company-name">
                        <FaGoogle />
                    </div>
                    <h3>Login with Google</h3>
                </div>
                <div className="login-container-content-company" onClick={signInWithGithubFunction} style={{cursor: "pointer"}}>
                    <div className="login-container-content-company-name">
                        <FaGithub />
                    </div>
                    <h3>Login with Github</h3>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Login