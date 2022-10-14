import React from "react";
import { AmmoList } from "../helpers/AmmoList";
import AmmoItem from "../components/AmmoItem";
import "../styles/Ammunition.css";
// import BannerImage from "../assets/navy.jpeg";
// style={{ backgroundImage: `url(${BannerImage})` }}


function Ammunition() {
    return (
        <div className="ammo" >
            <h1 className="ammoTitle">Ammunition</h1>
            <div className="ammoList">
                {AmmoList.map((ammoItem, key) => {
                    return (
                        <AmmoItem
                            key={key}
                            image={ammoItem.image}
                            name={ammoItem.name}
                            price={ammoItem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Ammunition;