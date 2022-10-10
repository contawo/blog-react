import {useState, useContext} from 'react';
import { FaShare } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import Comment from './Comment';
import uuid from "react-uuid";
import { BlogContext } from '../context/BlogContext';
import {useNavigate} from "react-router-dom";

const BlogsDisplaySide = ({blogId}) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const {userLogin, username, languageData} = useContext(BlogContext);
    const navigate = useNavigate()

    const getData = languageData.find(data => {
        return JSON.stringify(data.id) === JSON.stringify(blogId);
    })

    const addComment = () => {
        if(userLogin){
            setComments(prev => [...prev, {
                id: uuid(),
                commentAuthor: username,
                coomentValue: comment
            }])
            setComment("")
        } else {
            navigate("/login")
        }
    }

    const shareBlog = () => {
        navigator.share({
            text: "Please click here",
            url: "https://github.com/"
        }).then(() => {
            console.log("Link shared")
        }).catch((error) => alert("Sorry, could not share"))
    }

    return (
        <div className="blogs-view-container">
            <div className="blogs-view-container-comment">
                <div className="blogs-view-container-comment-show">
                    {comments.map(item => <Comment key={item.id} author={item.commentAuthor} comment={item.coomentValue} />)}
                </div>
                <div className="blogs-view-container-comment-add">
                    <input 
                        type="text" 
                        placeholder="Comment..." 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <FaPaperPlane 
                        style={{fontSize: "1.5rem", cursor: "pointer"}}
                        onClick={addComment}
                    />
                </div>
            </div>
            <div className="blogs-view-container-info">
                <div className="blogs-view-container-info-content">
                    <div className="blogs-view-container-info-content-show">
                        <p>12</p>
                    </div>
                    <h3>Views</h3>
                </div>
            <div className="blogs-view-container-info-content" style={{cursor: "pointer"}}>
                    <div className="blogs-view-container-info-content-show">
                        <FaThumbsUp />
                    </div>
                    <h3>Like</h3>
                </div>
            <div className="blogs-view-container-info-content" style={{cursor: "pointer"}} onClick={shareBlog}>
                    <div className="blogs-view-container-info-content-show">
                        <FaShare />
                    </div>
                    <h3>Share</h3>
                </div>
            </div>
        </div>
    )
}

export default BlogsDisplaySide
