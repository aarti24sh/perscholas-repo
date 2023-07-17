import React from "react";

function StarShipCard({starship}){
    return(

<div className="card">
<h3>{starship.name}</h3>
<p>Modal:{starship.model}</p>
<p>Manufacturer:{starship.manufacturer}</p>
<p>starship Class: {starship.starship_class}
</p>
</div>
);
}

export default StarShipCard;