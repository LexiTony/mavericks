import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/cover.jpg";
import "../styles/Home.css";
// import * as root from "react-dom";

function Home() {
  return (

    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> iTony <span>Top Gun Mavericks</span> </h1>

        {/*  const element = ( <h2>It is {new Date().toLocaleTimeString()}.</h2>);*/}
        {/*root.render(element);*/}
        <p> John Wick's Dynasty.</p>
        <Link to="/arsenal">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>



  );

}



// const root = ReactDOM.createRoot(
//     document.getElementById('root')
// );
//
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     root.render(element);
// }
//
// setInterval(tick, 1000);


export default Home;
