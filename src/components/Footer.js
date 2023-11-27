import React from "react";
import './Footer.css';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <a href="/employeer">
                            <p>Employeer Details</p>
                        </a>
                        <a href="/service">
                            <p>Service</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <a href="/resourses">
                            <p>Resourses</p>
                        </a>
                        <a href="/designs">
                            <p>Designs</p>
                        </a>
                        <a href="/architechs">
                            <p>Architechs Informations</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <a href="employeer">
                            <p>Business Partners</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Project Models</p>
                        </a>
                        <a href="/career">
                            <p>Career Scopes</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Footer;