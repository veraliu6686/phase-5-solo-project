import React from "react"
import PetCard from "./PetCard"

function PetPen ({pets}) {

    const renderPet = pets.map( pet => {
        return (
            <div>
                <PetCard key = {pet.id} pet = {pet}/>
            </div>
        )
    })

    return (
        <div className = "con">
            <h1> Hello from pet page</h1>
            <div>
                {renderPet}
            </div>
        </div>
    )
}

export default PetPen
