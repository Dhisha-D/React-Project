import React from "react";
import './Body.css';
import { Link } from "react-router-dom";
import Image1 from './Image1'
const Body=()=>{
    return(
        <div className="body">

        <div className="body-div">
            <Link to='/login'><button>Logins/Sign Up</button></Link>
            <Image1/>
        </div>
        </div>
    )
}

export default Body;