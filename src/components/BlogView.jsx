import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {BlogContext} from "../context/BlogContext"

// I will use the update feature here, to update the the view and likes and dislike.
// When the user clicks on the likes and dislike
const BlogView = ({id, title, views, author, lan}) => { 
    const {setLanguage} = React.useContext(BlogContext)

    const updateLikes = () => {}
    const url = `http://localhost:3000/blogs/${lan}/${id}`;
    React.useEffect(() => {
      fetch(url).then()
    }, [url])

  return (
    <div className="blog-view">
      <Link to={`/blogs/${lan}/${id}`} className="blog-view-link" onClick={() => setLanguage(`${lan}`)}>
        <h1 className="blog-view-title">{title}</h1>
        <div className="blog-view-content">
          <div className="blog-view-content-auth-details">
            <h2 className="blog-view-content-auth-title ">Author</h2>
            <p className="blog-view-content-auth-name">{author}</p>
          </div>
          <div className="blog-view-analytics">
            <div className="blog-view-analytics-views-blog-details">
                <div>{views}</div>
                <h4>Views</h4>
            </div>
            <div onClick={updateLikes} className="blog-view-analytics-react-blog-details">
                <div className="blog-view-analytics-react-icon"><FaThumbsUp /></div>
                <h4 className="blog-view-analytics-react-title">Like</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogView;
