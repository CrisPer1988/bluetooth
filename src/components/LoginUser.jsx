import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const LoginUser = () => {
   const {register, handleSubmit, reset} = useForm()
   const [loginUser, setLoginUser] = useState()

   const submit = (data) => {
    const url = "http://localhost:6400/api/v1/users/login"

    axios.post(url, data)
    .then(res => setLoginUser(res.data))
    .catch(err => console.log(err))
   }

   console.log(loginUser);

  return (
    <form onSubmit={handleSubmit(submit)}>
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

export default LoginUser