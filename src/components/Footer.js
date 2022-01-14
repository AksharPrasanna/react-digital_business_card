import React from "react"
import "./Styles.css"
import githubIcon from "./images/github_icon.png"
import twitterIcon from "./images/twitter_icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={githubIcon} className="footer-image" alt="" />
            <img src={twitterIcon} className="footer-image" alt="" />
        </div>
    )
}