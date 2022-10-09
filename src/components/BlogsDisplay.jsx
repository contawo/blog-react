import React from 'react';
import BlogsDisplaySide from './BlogsDisplaySide';
import Markdown from "markdown-to-jsx";
import Code from "./Code";

const BlogsDisplay = ({id, author, description, title}) => {
    return (
        <div className="blogs-display">
            <main className="blogs-display-content">
                <h1 className="blogs-display-content-title">{title}</h1>
                <p className="blogs-display-content-author">By {author}</p>
                <div className="blogs-display-content-details">
                    <Markdown
                        options={{
                            overrides: {
                              Code: {
                                component: Code
                              }
                            }
                          }}
                    >{description}</Markdown>
                </div>
            </main>
            <BlogsDisplaySide />
        </div>
    )
}

export default BlogsDisplay;