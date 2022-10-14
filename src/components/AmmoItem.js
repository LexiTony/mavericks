import React from "react";

function AmmoItem({ image, name, price }) {
    return (
        <div className="ammoItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
    );
}

export default AmmoItem;