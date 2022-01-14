import React from "react"
import image from "./images/akshar_transparent.jpeg"
import "./Styles.css"
import MainSection from "./MainSection"

export default function BusinessCard() {
    return (
        <div className="card">
            <img src={image} className="card-image" />
            <MainSection />
        </div>
    )
}