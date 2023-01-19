import React from "react"
export default function CommunityPet({pet}){
    const {image, name, user, gender,sterilized}=pet
    return(
        <div className="flex flex-col carousel-item text-center">
            <img className="mask mask-squircle object-cover w-36 h-36" src={image} alt={name}/>
            <div className="z-10 bg-slate-300 rounded-xl opacity-75">
                <div className="flex items-center justify-center">
                    <p>{name}</p>
                    {sterilized ?
                        <i className = "fa-solid fa-neuter"></i> :
                        ( gender == "female") ?  <i className = "fa-solid fa-venus"></i> :<i className = "fa-solid fa-mars"></i>
                    }
                </div>
            </div>
        </div>
    )
}
