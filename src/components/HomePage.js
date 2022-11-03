import React from "react";
import './HomePage.css';
import lips from "../asset/Lipstick.jpeg";
import eyes from "../asset/Eyes.jpg";
import face from "../asset/Face.jpg";
import cheeks from "../asset/Cheeks.jpg";
import { useNavigate } from "react-router-dom";
import { GiLipstick } from 'react-icons/gi';

const HomePage = () => {

    const navigate= useNavigate();
    const SignOut = () => {
        navigate(`/`);
    }
    const AboutUs = () => {
        navigate(`/About/Us`);
    }
    const LipsDetailPage = () => {
        navigate(`/Lips/Detail`);
    }
    const FaceDetailPage = () => {
        navigate(`/Face/Detail`);
    }
    const CheeksDetailPage = () => {
        navigate(`/Cheeks/Detail`);
    }
    const EyesDetailPage = () => {
        navigate(`/Eyes/Detail`);
    }

    return(
        <div className="nav" style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <ul>
                <li style={{color: "#F47181", fontSize: "30px"}}><strong>BEAUTY</strong><span>OU</span><GiLipstick /></li>
                <li onClick={SignOut} style={{color: "#7D8D9C", fontSize: "15px", marginRight: "35px"}}>Sign Out</li>
            </ul>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 170}}>
                
            <div className="card" style={{width: "16rem"}}>
                    <div className="card-image">
                    <img src={lips} alt="lips option"/>
                </div>
                <div className="card-title">
                    <p style={{color: "#F47181", fontSize: "25px"}} onClick={LipsDetailPage}><strong>LIPS</strong></p>
                </div>
            </div>

            <div className="card" style={{width: "16rem"}}>
                    <div className="card-image">
                    <img src={face} alt="face option"/>
                </div>
                <div className="card-title">
                    <p style={{color: "#F47181", fontSize: "25px"}} onClick={FaceDetailPage} ><strong>FACE</strong></p>
                </div>
            </div>

            <div className="card" style={{width: "16rem"}}>
                    <div className="card-image">
                    <img src={cheeks} alt="cheeks option"/>
                </div>
                <div className="card-title">
                    <p style={{color: "#F47181", fontSize: "25px"}} onClick={CheeksDetailPage} ><strong>CHEEKS</strong></p>
                </div>
            </div>

            <div className="card" style={{width: "16rem"}}>
                    <div className="card-image">
                    <img src={eyes} alt="eyes option"/>
                </div>
                <div className="card-title">
                    <p style={{color: "#F47181", fontSize: "25px"}} onClick={EyesDetailPage} ><strong>EYES</strong></p>
                </div>
            </div>

        </div>
        <footer onClick={AboutUs}>
            <strong>ABOUT US</strong>
        </footer>
</div>
    )
}

export default HomePage;