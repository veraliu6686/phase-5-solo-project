import React, { useState } from "react"
import PetCard from "./PetCard"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function PetPen ({currentUser}) {
    // get date from date picker
    const [startDate, setStartDate] = useState(new Date())
    const handleDateChange = (date) => {setStartDate(date)}
    const formattedDate = moment(startDate).format('MM/DD/YYYY');

    const [userPets, setUserPets] = useState(currentUser.pets)
    const [nameInput, setName] = useState ("")
    const [speciesInput, setSpecies] = useState ("")
    const [imageInput, setImage] = useState ("")
    const [weightInput, setWeight] = useState ("")
    const [genderInput, setGender] = useState ("")
    const [sterilizedInput, setSterilized] = useState ("")
    const [errors, setErrors] = useState([])
    const [submited, setSubmited] = useState (false)

    // add new pet form
    const handleSubmit = e => {
        e.preventDefault();
        const pet = {
            name: nameInput,
            arrival_date: formattedDate,
            image: imageInput,
            weight: weightInput,
            gender: genderInput,
            sterilized: sterilizedInput,
            user_id: currentUser.id
        }
        fetch("/api/pets",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({pet})
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(newPetData => setUserPets([newPetData, ...userPets]))

                setName("")
                setSpecies("")
                setImage("")
                setWeight("")
                setGender("")
                setSterilized("")
                setSubmited(true)
            }else{
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })

    }

    // display user's pets
    const renderPet = userPets.map( pet => {
        return (
            <div key = {pet.id} className = "px-5 carousel-item">
                <PetCard key = {pet.id} pet = {pet} setUserPets = {setUserPets}/>
            </div>
        )
    })

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            {/* button to render add form */}
            <label htmlFor="my-modal-6" className="btn text-lg mb-5 ml-10">ADD A BABY</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            {/* popover add form */}
            <div className="modal modal-bottom sm:modal-middle backdrop-blur-lg">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"> Start the Journey with
                    <span className = "uppercase text-primary-focus"> {nameInput}</span>
                    </h3>
                    <form  onSubmit = {handleSubmit} className = "form-control w-full max-w-xs">
                        <div className="tooltip tooltip-right" data-tip="name">
                            <input
                                type = "text"
                                className = "input w-full bg-white focus:input-accent text-base"
                                placeholder = "name"
                                name = "name"
                                value = {nameInput}
                                onChange = { e => {setName(e.target.value)}}
                                />
                        </div>
                        <select
                            className = "select select-bordered w-full bg-white text-[1.5rem] text-base-200 mb-3 "
                            value = {speciesInput}
                            onChange = { e => {setSpecies(e.target.value)}}>
                            <option diabled="true" value = "">choose one</option>
                            <option value = "bird">bird</option>
                            <option value = "cat">cat</option>
                            <option value = "dog">dog</option>
                            <option value = "guinea pig">guinea pig</option>
                            <option value = "reptile">reptile</option>
                            <option value = "turtle">turtle</option>
                            <option value = "other">other</option>
                        </select>
                        <div className="tooltip tooltip-right" data-tip="date arrival at home">
                            <DatePicker
                                className = "input w-full bg-white focus:input-accent text-base"
                                selected={startDate}
                                onChange={handleDateChange}
                            />
                        </div>
                        <div className="tooltip tooltip-right" data-tip="cute image">
                        <input
                            type = "text"
                            className = "input w-full bg-white focus:input-accent text-base"
                            placeholder = "image_url"
                            name = "image"
                            value = {imageInput}
                            onChange = { e => {setImage(e.target.value)}}
                            />
                        </div>
                        <div className="tooltip tooltip-right" data-tip="current weight">
                        <input
                            type = "text"
                            className = "input w-full bg-white focus:input-accent text-base"
                            placeholder = "weight"
                            name = "weight"
                            value = {weightInput}
                            onChange = { e => {setWeight(e.target.value)}}
                            />
                        </div>
                        <div className="tooltip tooltip-right" data-tip="birth gender">
                        <input
                            type = "text"
                            className = "input w-full bg-white focus:input-accent text-base"
                            placeholder = "gender"
                            name = "gender"
                            value = {genderInput}
                        onChange = { e => {setGender(e.target.value)}}
                            />
                        </div>
                        <select
                            className = "select select-bordered w-full bg-white text-[1.5rem] text-base-200 mb-3 "
                            value = {sterilizedInput}
                            onChange = { e => {setSterilized(e.target.value)}}>
                            <option diabled="true" value = "">sterilized ?</option>
                            <option value = "true">true</option>
                            <option value = "false">false</option>
                        </select>
                        <button type = "submit" className = "btn btn-primary text-base hover:text-white hover:text-base">Add pet</button>
                        {submited? <p className="py-4">Enjoy the time with you furry baby!</p> :<></>}
                        {errors?errors.map(e => <p className="py-4">{e.toUpperCase()}</p>):null}
                    </form>
                    <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn text-lg hover:text-white"> x </label>
                    </div>
                </div>
            </div>
            {/* pet gallery */}
            <div className = "carousel carousel-center w-5/6 p-10 space-x-4 rounded-box">
                <div className = "flex items-stretch overscroll-x-auto">
                    {renderPet}
                </div>
            </div>


        </div>
    )
}

export default PetPen
