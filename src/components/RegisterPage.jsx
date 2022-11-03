import React, { useState } from "react";
import { gql, useMutation } from '@apollo/client';
import './RegisterPage.css';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"
import cover from "../asset/Cover.jpg";

const GetAkun = gql`
query MyQuery {
    registrasi_akun {
        email
        Username
        Password
        confirm_password
    }
}`;

const InsertAkun = gql`
mutation InsertAkun(
    $email: String, 
    $Username: String, 
    $Password: String, 
    $confirm_password: String) {
    insert_registrasi_akun(objects: 
        {email: $email, 
            Username: $Username, 
            Password: $Password, 
            confirm_password: $confirm_password}) {
        affected_rows
    }
}`;

function RegisterPage() {
    const baseData = {
        email: "",
        username: "",
        password: "",
        confirm_password: "",
        editing: true,
    }

    const baseError = {
        email: "",
        password: "",
    }

    const [insertAkun] = useMutation(InsertAkun, {
        refetchQueries: [GetAkun],
    });
    
    const handleSubmitAkun = () => {
        const newData = {
            email: dataAkun.email,
            username: dataAkun.username,
            password: dataAkun.password,
            confirm_password: dataAkun.confirm_password,
        }
                insertAkun({variables: newData})
                setDataAkun({
                    ...dataAkun,
                    email:"",
                    username:"",
                    password:"",
                    confirm_password:"",
                })
            }

    const [dataAkun, setDataAkun] = useState(baseData);
    const [errorMassage, setErrorMassage] = useState(baseError);
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{8,10}$/;

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log("error", errorMassage)

        setDataAkun({
            ...dataAkun,
            [name]:value
        })
        if (name === "email") {
            if(!regexEmail.test(value)) {
                setErrorMassage({...errorMassage, email: "Invalid Email"})
            }
            else{
                setErrorMassage("")
            }
        }
        if (name === "password") {
            if(!regexPassword.test(value)) {
            setErrorMassage({...errorMassage, password : "Password length must be 8 characters and max 10 characters, also must contain letters and numbers"})
        }
        else {
            setErrorMassage("")
        }
    }

}
    //const handleSubmit = (event) => {
    //    if (errorMassage === "") {
    //        alert(`Data" "${dataAkun.nama}" Succes`)
    //        setDataAkun('');
    //        setErrorMassage('');
    //    }
    //    else {
    //        alert("Data Invalid")
    //    }
    //    event.preventDefault()
    //}

    //const resetData = () => {
    //    setDataAkun(useState);
    //    setErrorMassage("");
    //}

    const navigate= useNavigate();
    const action = () => {
        navigate(`/Login`);
    }

    return (
        <>
        <div className="cover" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "681px", width: "100%"}}>
            <img src={cover} alt="cover in register"/>
        <div className="form-card" style={{display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "center", justifyContent: "center" ,width: "100%"}} >
            <h1 className="title">Create Your Account</h1>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                </style>
            <form onSubmit={handleSubmitAkun}>
                    <label className="form">
                        E-Mail
                        <input
                        type="email"
                        name="email"
                        required
                        onChange={handleInput}
                        value={dataAkun.email}
                        style={{width: "100%", height:25, borderRadius: 5, marginBottom: 10, backgroundColor: "#F8F2ED", borderColor: "#D9D9D9", marginTop: 10}}
                        />
                        {errorMassage.email && <p style={{width: "25%", color: "red", display: "flex", justifyContent: "center", fontSize: "10px"}}>{errorMassage.email}</p>}
                    </label>
                
                    <label className="form">
                        Username
                        <input
                        type="text"
                        name="username"
                        required
                        onChange={handleInput}
                        value={dataAkun.username}
                        style={{width: "100%", height:25, borderRadius: 3, marginBottom: 10, backgroundColor: "#F8F2ED", borderColor: "#D9D9D9", marginTop: 10}}
                        />
                    </label>

                    <label className="form">
                        Password
                        <input
                        type="password"
                        name="password"
                        required
                        onChange={handleInput}
                        value={dataAkun.password}
                        style={{width: "100%", height:25, borderRadius: 3, marginBottom: 10, backgroundColor: "#F8F2ED", borderColor: "#D9D9D9", marginTop: 10}}
                        />
                        {errorMassage.password && <p style={{width: "100%", color: "red", display: "flex", justifyContent: "center", fontSize: "10px"}}>{errorMassage.password}</p>}
                    </label>

                    <label className="form">
                        Confirm Password
                        <input
                        type="password"
                        name="confirm_password"
                        required
                        onChange={handleInput}
                        value={dataAkun.confirm_password}
                        style={{width: "100%", height:25, orderRadius: 3, marginBottom: 10, backgroundColor: "#F8F2ED", borderColor: "#D9D9D9", marginTop: 10, textAlign: "left"}}
                        />
                        <Button onClick={handleSubmitAkun} style={{color: "white",backgroundColor: "#F47181", borderRadius: 5, width: "50%", border: "none", height: 35, marginTop: 10, textAlign: "center"}}>Sign Up</Button>
                    </label>
            </form>
        <p
        style={{color: "#F47181", display:"flex", justifyContent: "center"}}>Already have an Account?</p>
    <a href="" onClick={action}
    style={{color: "#889390", display:"flex", justifyContent: "center", marginTop: 0}}><strong>Sign In</strong></a>
</div>
</div>
</>
    )
}

export default RegisterPage;