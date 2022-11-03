import React, { useState } from "react";
import RegisterPage from "../components/RegisterPage";

function RegisterPageContainer() {
    const baseData = {
        email: "",
        username: "",
        password: "",
        confirm_password: "",
    }

    const baseError = {
        email: "",
        password: "",
        confirm_password:"",
    }
    const [data, setData] = useState(baseData);
    const [errorMassage, setErrorMassage] = useState(baseError);
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{8,10}$/;

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log("error", errorMassage)

        setData({
            ...data,
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

    const resetData = () => {
        setData(baseData);
        setErrorMassage("");
    }

    return(
        <RegisterPage email={setData.email}
                  name={setData.username}
                  password={setData.password}
                  confirm_password={setData.confirm_password}
                  handleSubmit={handleSubmit}/>
      )
    }
    
    export default RegisterPageContainer;