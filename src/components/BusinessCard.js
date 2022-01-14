import React from "react"
import image from "./images/background.jpeg"
import "./Styles.css"
import MainSection from "./MainSection"
import Footer from "./Footer"

export default function BusinessCard() {
    return (
        <div className="card">
            <img src={image} className="card-image" alt=""/>
            <MainSection />
            <Footer />
        </div>
    )
}