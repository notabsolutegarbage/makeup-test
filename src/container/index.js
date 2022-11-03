import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client"
import { useState } from "react";
import RegisterPage from "../components/RegisterPage";

const GetAccount = gql`
query MyQuery {
    registrasi_akun {
      Password
      Username
      confirm_password
      email
      id_user
    }
  }`;

const InsertAccount = gql`
mutation InsertAccount($password: String, $username: String, $confirm_password: String, $email: String){
    insert_registrasi_akun(objects: {password: $password, 
        username: $username, 
        confirm_password: $confirm_password, 
        email: $email}) {
        affected_rows
    }
}`;
