import React from "react"

function Home ({pets}) {

    const renderPet = pets.map( pet => {
        return (
            <div>
                <span className = "line">
                    <h3>{pet.name}</h3>
                    {pet.sterilized ?
                        <i className = "fa-solid fa-neuter"></i> :
                        ( pet.gender == "female") ?  <i className = "fa-solid fa-venus"></i> : <i className = "fa-solid fa-mars"></i>
                    }
                    <img className = "round-clip" src = {pet.image} alt = {pet.name}/>
                </span>
            </div>
        )
    })

    return (
        <div className = "con">
            <h1>Hello from Home</h1>
                {renderPet}
        </div>
    )
}

export default Home;
