import {useEffect, useContext} from 'react';
import BlogView from './BlogView';
import {db} from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import {BlogContext} from "../context/BlogContext";

const LanguagePage = ({text, link, linkText, languageName}) => {
    const {languageData, setLanguageData} = useContext(BlogContext);
    const languageRef = collection(db, `${languageName}`)
    useEffect(() => {
        getDocs(languageRef).then(res => {
            setLanguageData(res.docs.map(d => ({ ...d.data(), id: d.id})))
        }).catch(err => console.log(err.message))}, [])
        
    return (
        <div className="language-page">
            <div className="language-page-header">
                <p className="language-page-header-description">{text}</p>
                <div className="language-page-header-link">
                    <a href={link} target="_blank" className="language-page-header-link-url" rel="noreferrer">{linkText}</a>
                </div>
            </div>
            <h1 className="language-page-title">All Posts</h1>
            <div className="language-page-show-blogs">
                {languageData.map((blog) => <BlogView key={blog.id} title={blog.title} views={blog.views} likes={blog.likes} author={blog.author} id={blog.id} lan={languageName}/>)}
            </div>
        </div>
    )
}

export default LanguagePage;