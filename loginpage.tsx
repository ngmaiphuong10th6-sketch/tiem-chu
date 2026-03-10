"use client"

import {useState} from "react"

export default function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async()=>{

await fetch("/api/login",{

method:"POST",

body:JSON.stringify({
email,
password
})

})

}

return(

<div className="flex justify-center mt-40">

<div className="p-10 shadow bg-white">

<h2>Đăng nhập</h2>

<input
placeholder="email"
onChange={e=>setEmail(e.target.value)}
/>

<input
placeholder="password"
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={login}>
Login
</button>

</div>

</div>

)

}