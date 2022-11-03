import React from "react";
import background from "../asset/Background.jpg";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {

    const navigate= useNavigate();
    const GoHome = () => {
        navigate(`/Home`);
    }

    return (
        <div className="about-us" style={{display: "flex", flexDirection: "column", height:"100px" ,width: "100%", color: "#F47181"}}>
            <ul>
                <li style={{fontSize: "20px"}}><strong>ABOUT US</strong></li>
                <li style={{fontSize: "20px", marginLeft: "20px"}}  onClick={GoHome}><strong>HOME</strong></li>
            </ul>
            <img src={background} alt="about us img"/>
            <p className="description" style={{padding: 20, color: "#F47181" }} >
                Find everything you want and need to know about beauty on <strong>BeautyOU</strong> Product Reviews and Consumer Opinions! We are here to be your friendly solution to all things beauty, inside and out!
                Are there beauty products that you love so much that you want to share your experience about? 
                Or are you in dilemma on which beauty products to buy for a product? <strong>BeautyOU</strong> provides a specific review page for you to do exactly that – share your opinions and find beauty solutions 
                for your problems, and make a better decision for yourself!</p>
        
    </div>
    )
}

export default AboutUs;