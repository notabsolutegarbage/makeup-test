import React from "react";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import cover from "../asset/Cover.jpg";

function LoginPage() {
    const baseData = {
        username: "",
        password: "",
    }

    const baseError = {
        username: "",
        password: "",

    }

    const [data, setData] = useState(baseData);
    const [errorMassage, setErrorMassage] = useState(baseError);

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log("error", errorMassage)

        setData({
            ...data,
            [name]:value
        })
}

    const handleSubmit = (event) => {
        if (errorMassage === "") {
            alert(`Data" "${data.nama}" Succes`)
            setData('');
            setErrorMassage('');
        }
        else {
            alert("Data Invalid")
        }
        event.preventDefault()
    }

    const navigate= useNavigate();
    const GoHome = () => {
        navigate(`/Home`);
    }
    const SignUp = () => {
        navigate(`/`);
    }

    return (
        <>
        <div className="cover" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "681px", width: "100%"}}>
            <img src={cover} alt="cover in login"/>
        <div className="form-card" style={{display: "flex", justifyContent: "center"}}>
            <h1 className="title">Sign In To Your Account</h1>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                </style>
            <form onSubmit={handleSubmit}>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                    <label className="form">
                        Username
                        <input
                        type="text"
                        name="username"
                        required
                        onChange={handleInput}
                        value={data.username}
                        style={{width: "100%", height:30, borderRadius: 3, marginBottom: 10, backgroundColor: "#F8F2ED", borderColor: "#D9D9D9", marginTop: 10}}
                        />
                    </label>

                    <label className="form">
                        Password
                        <input
                        type="password"
                        name="password"
                        required
                        onChange={handleInput}
                        value={data.password}
                        style={{width: "100%", height:30, borderRadius: 3, marginBottom: 10, backgroundColor: "#F8F2ED", borderColor: "#D9D9D9", marginTop: 10}}
                        />
                        {errorMassage.password && <p style={{width: "100%", color: "red", display: "flex", justifyContent: "center", fontSize: "10px"}}>{errorMassage.password}</p>}
                    </label>
                        <Button onClick={GoHome} style={{color: "white",backgroundColor: "#F47181", borderRadius: 5, width: "20%", border: "none", height: 35, marginTop: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>Sign In</Button>
                </div>
            </form>
        <p
        style={{color: "#F47181", display:"flex", justifyContent: "center"}}>Don't Have Any Account?
        </p>
    <a href="" onClick={SignUp}
    style={{color: "#889390", display:"flex", justifyContent: "center"}}><strong>Create An Account</strong></a>
        </div>
   </div>
</>
    )
}

export default LoginPage;

