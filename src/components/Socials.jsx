import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import UserLogin from './UserLogin';

const Socials = () => {
  return (
    <div className="socials">
        <h3 className="socials-heading">Awonke Blog</h3>
        <div className="socials-container">
            <div className="socials-content">
                <a href="https://github.com/Awonke11" className="socials-content-link" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </div>
            <div className="socials-content">
                <a href="https://twitter.com/ajmnotoza" className="socials-content-link" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
            </div>
            <div className="socials-content">
                <a href="https://www.instagram.com/aj_mnotoza/" className="socials-content-link" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </div>
        <UserLogin />
    </div>
  )
}

export default Socials