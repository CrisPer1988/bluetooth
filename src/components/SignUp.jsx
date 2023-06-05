import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";


const SignUp = () => {
    const {register, handleSubmit, reset} = useForm()
    const [registerUser, setRegisterUser] = useState()

    const submit = (data) => {
        const url = "http://localhost:6400/api/v1/users/signup"
        axios.post(url, data)
        .then(res => setRegisterUser(res.data))
        .catch(err => console.log(err))
    }

    console.log(registerUser);

  return (
    <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="name">Name</label>
            <input {...register("name")} type="text" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" />
        </div>
        <button>Send</button>
    </form>
  )
}

export default SignUp