import React from 'react'
import Navigation from './Navigation';
import { BsDoorClosed, BsDoorOpen } from "react-icons/bs";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
        <Navigation />
        <main className="page-not-found-content">
            <div className="page-not-found-content-closed">
                <BsDoorClosed />
            </div>
            <h3>Sorry, page not found</h3>
            <Link to="/" className="page-not-found-content-open">
                <BsDoorOpen />
                <h4>Home</h4>
            </Link>
        </main>
    </div>
  )
}

export default PageNotFound