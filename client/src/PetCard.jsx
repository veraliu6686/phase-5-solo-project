import React from "react"

function PetCard ({pet}) {
    const {name, gender, image, weight, sterilized} = pet
    return (
        <div className = "indicator mx-5">
            <div className="indicator-item indicator-center indicator-bottom badge badge-primary">
                <button className="btn btn-warning-focus rounded-full lowercase text-base hover:text-base hover:text-white">Manage</button>
            </div>
            <div className="w-full max-w-sm border-secondary rounded-lg shadow-md">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-48 h-48 mb-3 rounded-full shadow-lg object-cover" src = {image} alt = {name}/>
                    <div className=" flex items-center mt-1">
                        <h5 className="text-2xl text-primary">{name}</h5>
                        {sterilized ?
                        <i className = "fa-solid fa-neuter"></i> :
                        ( gender == "female") ?  <i className = "fa-solid fa-venus"></i> :<i className = "fa-solid fa-mars"></i>
                        }
                    </div>
                    <span className= "text--slate-600 text-base">Weight: {weight}</span>
                </div>
            </div>
        </div>
    )
}

export default PetCard;
