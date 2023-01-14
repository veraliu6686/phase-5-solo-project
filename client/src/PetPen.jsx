import React, { useState } from "react"
import PetCard from "./PetCard"

function PetPen ({pets, setPets, currentUser}) {
    const [inputs, setInputs] = useState ({
        name: "",
        arrival_date: "",
        image: "",
        weight: "",
        gender: "",
        sterilized: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        // const newPet = {
        // name: inputs.name,
        // arrival_date: inputs.arrival_date,
        // image: inputs.image,
        // weight: inputs.weight,
        // gender: inputs.gender,
        // sterilized: inputs.sterilized,
        // user_id: currentUser.id
        // }
        fetch("/api/pets",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...inputs, user_id: currentUser.id})
        })
        .then(res => res.json())
        .then(newPet => setPets([newPet, ...pets]))
        setInputs("")
    }
    console.log(inputs)
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs({ ...pets, [name]: value })
    }

    console.log(inputs)
    const renderPet = pets.map( pet => {
        return (
            <div key = {pet.id}>
                <PetCard key = {pet.id} pet = {pet}/>
            </div>
        )
    })

    return (
        <div className = "con">
            <h1> Hello from pet page</h1>
            <form  onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    className = "input input-ghost w-full max-w-xs"
                    placeholder = "name"
                    name = "name"
                    value = {inputs.name}
                    onChange = { handleChange}
                    />
                <input
                    type = "text"
                    className = "input input-ghost w-full max-w-xs"
                    placeholder = "date arrived at home"
                    name = "arrival_date"
                    value = {inputs.arrival_date}
                    onChange = { handleChange}
                    />
                <input
                    type = "text"
                    // className = "input input-ghost w-full max-w-xs"
                    placeholder = "image_url"
                    name = "image"
                    value = {inputs.image}
                    onChange = { handleChange}
                    />
                <input
                    type = "text"
                    // className = "input input-ghost w-full max-w-xs"
                    placeholder = "weight"
                    name = "weight"
                    value = {inputs.weight}
                    onChange = { handleChange}
                    />
                <input
                    type = "text"
                    // className = "input input-ghost w-full max-w-xs"
                    placeholder = "gender"
                    name = "gender"
                    value = {inputs.gender}
                    onChange = { handleChange}
                    />
                <input
                    type = "text"
                    className = "input input-ghost w-full max-w-xs"
                    placeholder = "sterilized ? true or false"
                    name = "sterilized"
                    value = {inputs.sterilized}
                    onChange = { handleChange}
                    />
                <button type = "submit" className = "btn btn-primary">Add Pet</button>
            </form>
            <div>
                {renderPet}
            </div>
        </div>
    )
}

export default PetPen
