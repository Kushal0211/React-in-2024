import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    const {userLoggedIn} = useContext(UserContext);
    console.log(userLoggedIn);

    useEffect(()=>{
        console.log("useEffect called");
    },[]);

    return (
        <div className="header">
            <div className="logo-container">
                <Link to = "/"  className="link-tag"><img className="logo" src={LOGO_URL} /></Link>
            </div>

            <div className="nav-items">
                <ul>
                    <li> <Link to = "/"  className="link-tag"> Home </Link> </li>
                    <li> <Link to= "/about"  className="link-tag"> Our Team </Link> </li>
                    <li> <Link to = "/contact"  className="link-tag"> Contact Us </Link></li>
                    <li>Cart</li>
                    <li className="isOnline">{OnlineStatus ? "🔵" : "🔴"}</li>
                    <li>{userLoggedIn}</li>
                    <button className="loginBtn"
                    onClick={()=>{
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}
                    >
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    );
};


export default Header;