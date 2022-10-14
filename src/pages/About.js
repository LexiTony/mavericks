import React from "react";
import MultiplePizzas from "../assets/mdb1.jpg";
import "../styles/About.css";
// import ReorderIcon from "@mui/icons-material/Reorder";
// import PersonIcon from "@mui/icons-material/Person";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
// import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
// 0052472000
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import DevicesIcon from '@mui/icons-material/Devices';


function About() {
  return (
      <React.Fragment>
        <div className="about">
          <div
              className="aboutTop"
              style={{ backgroundImage: `url(${MultiplePizzas})` }}
          ></div>
          <div className="aboutBottom">
            <h1> ABOUT US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
              accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
              molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
              officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
              nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
              error repudiandae fuga? Ipsa laudantium molestias eos sapiente
              officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
              Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
              cumque velit
            </p>
          </div>
        </div>
        <div className="service">

          <div className="title">
            <h1>
              Our Services
            </h1>
            <p className="des"> These are the Services provided by iTony TopGunMavericks</p>
          </div>

          <div className="box">

            <div className="card">
              <ShoppingCartIcon className="icon"/>
              <h2>E-Commerce</h2>
              <div className="pra">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                </p>
                <p style={{textAlign: 'center'}}>
                  <a className="button" href="#will_provide_later">
                    Read More
                  </a>
                </p>
              </div>
            </div>


            <div className="card">
              <LockPersonIcon className="icon"/>
              <h2>Web Security</h2>
              <div className="pra">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                </p>
                <p style={{textAlign: 'center'}}>
                  <a className="button" href="#will_provide_later">
                    Read More
                  </a>
                </p>
              </div>
            </div>


            <div className="card">
              <DevicesIcon className= "icon"/>
              {/*<DevicesIcon className= "icon"/>*/}
              <h2>Responsive Design</h2>
              <div className="pra">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  mollitia, molestiae quas vel sint commodi repudiandae consequuntur
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

export default About;