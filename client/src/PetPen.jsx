import React, { useState } from "react"
import PetCard from "./PetCard"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PetPen ({pets, setPets, currentUser}) {
    const [startDate, setStartDate] = useState(new Date())
    const [inputs, setInputs] = useState ({
        name: "",
        image: "",
        weight: "",
        gender: "",
        sterilized: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        const newPet = {
        name: inputs.name,
        arrival_date: startDate,
        image: inputs.image,
        weight: inputs.weight,
        gender: inputs.gender,
        sterilized: inputs.sterilized,
        user_id: currentUser.id
        }
        fetch("/api/pets",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({newPet})
        })
        .then(res => res.json())
        .then(newPet => setPets([newPet, ...pets]))

        setInputs({
        name: "",
        image: "",
        weight: "",
        gender: "",
        sterilized: ""
        })
    }
    console.log(startDate)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs({ ...pets, [name]: value })
    }

    const handleDateChange = date => {
        let selectedDateFromCalender =  date.format();
        setStartDate( selectedDateFromCalender)
    }

    const renderPet = pets.map( pet => {
        return (
            <div key = {pet.id} className = "px-5">
                <PetCard key = {pet.id} pet = {pet}/>
            </div>
        )
    })
    return (
        <div>
            <form  onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    className = "input input-ghost w-full max-w-xs"
                    placeholder = "name"
                    name = "name"
                    value = {inputs.name}
                    onChange = { handleChange}
                    />
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    />
                {/* <input
                    type = "text"
                    className = "input input-ghost w-full max-w-xs"
                    placeholder = "date arrived at home"
                    name = "arrival_date"
                    value = {inputs.arrival_date}
                    onChange = { handleChange}
                    /> */}
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
                <button type = "submit" className = "btn btn-primary">Add pet</button>
            </form>
            <div className = "flex items-stretch overscroll-x-auto">
                {renderPet}
            </div>
        </div>
    )
}

export default PetPen
