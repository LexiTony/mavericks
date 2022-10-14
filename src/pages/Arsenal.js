import React from "react";
import { ArsenalList } from "../helpers/ArsenalList";
import ArsenalItem from "../components/ArsenalItem";
import "../styles/Arsenal.css";
// import BannerImage from "../assets/navy.jpeg";
// style={{ backgroundImage: `url(${BannerImage})` }}


function Arsenal() {
  return (
    <div className="arsenal" >
      <h1 className="arsenalTitle">Arsenal</h1>
      <div className="arsenalList">
        {ArsenalList.map((arsenalItem, key) => {
          return (
            <ArsenalItem
              key={key}
              image={arsenalItem.image}
              name={arsenalItem.name}
              price={arsenalItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Arsenal;