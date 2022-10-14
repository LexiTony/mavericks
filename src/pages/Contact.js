import React from "react";
import lex from "../assets/lex.jpg";
import "../styles/Contact.css";
// import InstagramIcon from "@mui/icons-material/Instagram";
import ReorderIcon from "@mui/icons-material/Reorder";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Contact() {
    return (
        <React.Fragment>
            <div className="contact">
                <div
                    className="leftSide"
                    style={{backgroundImage: `url(${lex})`}}
                ></div>
                <div className="rightSide">
                    <h1> Contact Us</h1>

                    <form id="contact-form" method="POST">
                        <label htmlFor="name">Full Name</label>
                        <input name="name" placeholder="Enter full name..." type="text"/>
                        <label htmlFor="email">Email</label>
                        <input name="email" placeholder="Enter email..." type="email"/>
                        <label htmlFor="message">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Enter message..."
                            name="message"
                            required
                        ></textarea>
                        <button type="submit"> Send Message</button>
                    </form>
                </div>
            </div>
            <div className="service">

                <div className="title">
                    <h1>
                        Our Services
                    </h1>
                </div>

                <div className="box">

                    <div className="card">
                        <ReorderIcon className="icon"/>
                        {/*<InstagramIcon />*/}
                        <h2>Web Development</h2>
                        <div className="pra">
                            <p>
                                Every website should be built with two primary goals. Firstly it needs to work across
                                all
                                devices. Secondly it needs to be fast as possible.
                            </p>
                            <p style={{textAlign: 'center'}}>
                                <a className="button" href="#will_provide_later">
                                    Read More
                                </a>
                            </p>
                        </div>
                    </div>


                    <div className="card">
                        {/*<a href="#"><i className="fas fa-camera"></i></a>*/}
                        <PersonIcon className="icon"/>
                        <h2>Web Development</h2>
                        <div className="pra">
                            <p>
                                Every website should be built with two primary goals. Firstly it needs to work across
                                all
                                devices. Secondly it needs to be fast as possible.
                            </p>
                            <p style={{textAlign: 'center'}}>
                                <a className="button" href="#will_provide_later">
                                    Read More
                                </a>
                            </p>
                        </div>
                    </div>


                    <div className="card">
                        {/*<i className="fa-regular fa-bell">hello</i>*/}
                        {/*<a href="#"><i className="fas fa-camera"></i></a>*/}
                        <NotificationsIcon className= "icon"/>
                        <h2>Web Development</h2>
                        <div className="pra">
                            <p>
                                Every website should be built with two primary goals. Firstly it needs to work across
                                all
                                devices. Secondly it needs to be fast as possible.
                            </p>
                            <p style={{textAlign: 'center'}}>
                                <a className="button" href="#will_provide_later">
                                    Read More
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </React.Fragment>

    );
}

export default Contact;