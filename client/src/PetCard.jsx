import React from "react"

function PetCard ({pet}) {
    const {name, gender, image, weight, sterilized} = pet
    return (
        <div>
            <span className="line">
                <h3>{name}</h3>
                {sterilized ?
                    <i className = "fa-solid fa-neuter"></i> :
                    ( gender == "female") ?  <i className = "fa-solid fa-venus"></i> :<i className = "fa-solid fa-mars"></i>
                }
                <img className = "round-clip" src = {image} alt = {name}/>
                <p>Weight: {weight}</p>
            </span>
            <div className = "submit-btn">
                <button type = "button"> Manange {name}</button>
            </div>
        </div>
    )
}

export default PetCard;
