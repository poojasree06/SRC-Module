import React, { useState } from "react";
import "../login2/login2.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"

const LoginAdmin = (props) => {
    const [user, setUser] = useState(
        {
            name: "",
            password: "",
        }
    )

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const postUserName = async () => {
        const USER = {
            "username": user.name
        };
        console.log(USER)
        const result = await fetch("/verifyAdminLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(USER)
        })

        const resultInJSON = await result.json();
        console.log(resultInJSON);
    }

    return (
        <div>
            <div className="container_login2">
                <img src={logo} alt="IIT Tirupati Logo" />
                <h3 className="text-center" >Admin Login</h3>
                <form action="#" class="login2-form" >
                    <div className="form-group_login2" >
                        <input type="text" name="name" value={user.name} className="form-control rounded-left" placeholder="Username" required onChange={handleChange} />

                    </div>
                    <div className="form-group_login2" >
                        <input type="password" name="password" value={user.password} className="form-control rounded-left" placeholder="Password" required onChange={handleChange} />
                    </div>
                    <div className="form-group_login2">
                        <div className="w-50" >
                            <a href="www.google.com">Forgot Password</a>
                        </div>
                    </div>
                    
                    <Link to={"/Admin/"+user.name+"/home"}>        
                        <div className="form-group_login2">
                            <button type="submit" onClick={postUserName} className="btn btn-primary rounded submit p-3 px-5">Login</button>
                        </div>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default LoginAdmin;