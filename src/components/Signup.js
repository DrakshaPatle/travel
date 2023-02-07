import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // if user is signin dontshow signup page insted send them on main
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }

    })


    // integrate api backend to react js
    const collectData = async () => {
        console.warn(name, email, password);
        console.log(name, email);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        result = await result.json();
        //  console.log("hi")
        console.warn(result)
        //  localStorage.setItem("user",");
        // to store data in local 
        localStorage.setItem("user", JSON.stringify(result));

        // Navigate('/')

    }

    return (
        <div className='register'>
            <h1>Signup </h1>


            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text" placeholder="Enter-Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter-Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={collectData} className="appButton" type="button">Sign up</button>

        </div>
    )
}


export default Signup