import React from "react"

export default function UserProfile({currentUser}){
    const {username, followers, following, pets}= currentUser

const renderPet=pets.map(pet=>{
    return(
        <div key={pet.id} className="overflow-auto">
            <div className="card w-72 h-128 bg-base-100 shadow-xl glass">
                <div className="card-body">
                    <p className="text-[1.5rem]"> <span className="text-primary text-base font-bold">{pet.name}</span> has been accompanied with you for <span className="text-primary font-bold">{pet.days_from_today}</span> days</p>
                </div>
                <figure className="w-full  object-cover"><img src={pet.image} alt={pet.name} /></figure>
            </div>
        </div>
    )
})
    return(
        <div className="flex flex-col justify-center items-center">
            <h1>Hi {username.toUpperCase()}</h1>
            <p>Followers:{followers.length}</p>
            <p>Following:{following.length}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 w-7/8 mb-10">
            {renderPet}
            </div>

        </div>
    )
}
