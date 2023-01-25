import React from "react"
export default function CommunityPet({pet}){
    const {image, name, gender,sterilized}=pet
    return(
        <div className="flex flex-col carousel-item text-center">
            <img className="mask mask-squircle object-cover w-36 h-36" src={image} alt={name}/>
            <div className="z-10 bg-slate-300 rounded-xl opacity-75">
                <div className="flex items-center justify-center">
                    <p className="text-neutral">{name}</p>
                    {sterilized ?
                        <i className = "fa-solid fa-neuter text-neutral"></i> :
                        ( gender == "female") ?  <i className = "fa-solid fa-venus text-neutral"></i> :<i className = "fa-solid fa-mars text-neutral"></i>
                    }
                </div>
            </div>
        </div>
    )
}
