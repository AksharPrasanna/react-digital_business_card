import React from "react"
import "./Styles.css"
import mailIcon from "./images/mail_icon.png"
import linkedinIcon from "./images/linkedin_icon.png"

export default function MainSection() {
    return (
        <div className="main">
            <h1 className="main-header">Akshar Prasanna</h1>
            <p className="main-title">Technology Tinkerer</p>
            <p className="main-website">akshar.eth</p>
            <div className="button-section">
                <button className="button-email">
                    <img src={mailIcon} className="button-image" alt="" />
                    Email
                </button>
                <button className="button-linkedin">
                    <img src={linkedinIcon} className="button-image" alt="" />
                    LinkedIn
                </button>
            </div>
            <h3 className="main-content-header">About</h3>
            <p className="main-content">I am a frontend developer with a particular interest in making things
                simple and automating daily tasks. I try to keep up with security and best practices,
                and am always looking for new things to learn.
            </p>
            <h3 className="main-content-header">Interests</h3>
            <p className="main-content">I am a frontend developer with a particular interest in making things
                simple and automating daily tasks. I try to keep up with security
                and best practices, and am always looking for new things to learn.
            </p>
        </div>
    )
}