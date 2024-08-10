import react,{ useState, useContext    } from "react";
import {LOGO_URL} from "../utils/constants";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { useSelector } from 'react-redux';
import store from "../utils/Storage";
const Header=()=>{
    const { user } = useContext(UserContext)||{};
    console.log(user);
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    const isonline=useOnline();
    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure about logout?");
        if (confirmLogout) {
          setIsLoggedIn(false);
        }
    };
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="header">
            <div className="logo-Container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
                {/* {(user.name!="UserName") && */}
                
                {<span className="headerUserName">{user.name} </span>}
            </div>
            <ul className="nav-items">
                
                <li className="nav-item home-btn" ><Link to="/">Home</Link></li>
                {/* <li className="nav-item offer-btn"><Link to="/instamart">InstaMart</Link></li> */}
                <li className="nav-item offer-btn"><Link to="/contact">Contact</Link></li>
                <li className="nav-item about-btn"><Link to="/about">About</Link></li>
                <li className="nav-item cart-btn"><Link to="/cart">Cart {cartItems.length>0 && cartItems.length}</Link></li>
                {isLoggedIn ? (
                    <li
                        className="nav-item signOut-btn"
                        onClick={handleLogout}
                    >
                        <Link to="/">
                            Log out <span className="isOnlineOffline" style={(isonline!=true)?{ backgroundColor: "#9d2a01" }:{ backgroundColor: "#00ad1d"}}></span>
                        </Link>
                    </li>
                ) : (
                    <li
                    className="nav-item signIn-btn"
                    onClick={() => setIsLoggedIn(true)} // Corrected onClick syntax
                    >
                        <Link to="/logIn">LogIn</Link>
                    </li>
                )}
                
            </ul>
        </div>
    )
}

export default Header;