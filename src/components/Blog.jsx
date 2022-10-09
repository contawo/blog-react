import React from 'react';
import {useParams} from 'react-router-dom'
import BlogNav from './BlogNav';
import BlogsDisplay from './BlogsDisplay';
import Navigation from './Navigation';
import {BlogContext} from "../context/BlogContext";

const Blog = () => {
    const {blogId} = useParams();
    const {languageData} = React.useContext(BlogContext);

    const getData = languageData.find(data => {
      return JSON.stringify(data.id) === JSON.stringify(blogId);
    })
    
    return (
      <div className="blogs">
        <Navigation />
        <BlogsDisplay id={blogId} author={getData.author} description={getData.body} title={getData.title} />
        <BlogNav />
      </div>
    )
}

export default Blog
