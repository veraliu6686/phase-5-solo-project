import React from "react"

function Home ({pets}) {

    const renderPet = pets.map( pet => {
        return (
            <div className="flex flex-col items-center pb-10">
                <img className="w-48 h-48 mb-3 rounded-full shadow-lg object-cover" src = {pet.image} alt = {pet.name}/>
                <div className=" flex items-center mt-1">
                    <h5 className="text-2xl text-primary">{pet.name}</h5>
                    {pet.sterilized ?
                    <i className = "fa-solid fa-neuter"></i> :
                    ( pet.gender == "female") ?  <i className = "fa-solid fa-venus"></i> :<i className = "fa-solid fa-mars"></i>
                    }
                </div>
            </div>
        )
    })

    return (
        <div>
                {renderPet}
        </div>
    )
}

export default Home;
