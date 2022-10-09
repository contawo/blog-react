import React from 'react';
import {Link} from "react-router-dom";

const HomeMainContent = () => {
  return (
    <div className="home-main-container">
        <div className="home-main-content">
            <p className="home-main-content-welcome">Welcome to...</p>
            <h1 className="home-main-content-title">Awonke Blog</h1>
            <p className="home-main-content-description">Learn more about coding and get updated with the latest trends in the programming worlds</p>
            <div className="home-main-content-prompt">
                <Link to="/blogs" className="home-main-content-prompt-link">
                    <h3>View blogs</h3>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeMainContent
