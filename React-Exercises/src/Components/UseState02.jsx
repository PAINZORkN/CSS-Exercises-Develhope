import React, { useState } from "react"



export function Login() {

    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    });

    const handleValue = (e) => {
        const { name, value, checked, type } = e.target

        setData((
            data => {
                return {
                    ...data,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        ))
    }

    const onLogin = (e) => {
        e.preventDefault();
        console.log(data);
    };




    return (
        <div>
            <h1> My Form03</h1>
            <input
                name="username"
                type="text"
                value={data.username}
                onChange={handleValue}
            />
            <input
                name="password"
                type="password"
                value={data.password}
                onChange={handleValue}
            />
            <input
                name="remember"
                type="checkbox"
                checked={data.remember}
                onChange={handleValue}
            />

            <button
                name="button"
                type="button"
                onClick={onLogin}
                disabled={
                    data.username === "" || data.password === "" ? true : false
                }
            >
                Click me!
            </button>
        </div>
    )


}





/*
Rewrite the Login component from Forms 03 as a function component, and use the 
useState hook to track the state of the username, 
password and remember inputs. Tip: you can use useState more than once.
*/