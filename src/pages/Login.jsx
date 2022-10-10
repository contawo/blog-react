import {useContext} from 'react';
import {BlogContext} from "../context/BlogContext";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Navigation from '../components/Navigation';
import {auth} from "../firebase/firebaseConfig";
import {GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {setUsername, setUserEmail, setUserLogin} = useContext(BlogContext);
    const navigate = useNavigate();

    const signInWithGoogleFunction = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            setUsername(result.user.displayName)
            setUserEmail(result.user.email)
            setUserLogin(true)
            navigate("/")
        }).catch((error) => {
            console.log(error)
        })
    }

    const signInWithGithubFunction = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider).then((response) => {
            setUsername(response.user.displayName)
            setUserEmail(response.user.email)
            setUserLogin(true)
            navigate("/")
        }).catch((error) => {
            console.log("Error" + error)
        })
    }

    return (
        <div className="login">
            <Navigation />
            <main className="login-container">
                <h2 className="login-container-title">Login</h2>
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