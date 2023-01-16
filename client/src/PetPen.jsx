import React, { useState } from "react"
import PetCard from "./PetCard"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PetPen ({pets, setPets, currentUser}) {
    // const [startDate, setStartDate] = useState(new Date())
    const [nameInput, setName] = useState ("")
    const [dateInput, setDate] = useState ("")
    const [imageInput, setImage] = useState ("")
    const [weightInput, setWeight] = useState ("")
    const [genderInput, setGender] = useState ("")
    const [sterilizedInput, setSterilized] = useState ("")
    const [submited, setSubmited] = useState (false)

    const handleSubmit = e => {
        e.preventDefault();
        const pet = {
        name: nameInput,
        arrival_date: dateInput,
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
        .then(res => res.json())
        .then(newPetData => setPets([newPetData, ...pets]))
        setName("")
        setDate("")
        setImage("")
        setWeight("")
        setGender("")
        setSterilized("")
            setSubmited(!submited)
    }

    // const handleDateChange = date => {
    //     let selectedDateFromCalender =  date.format();
    //     setStartDate( selectedDateFromCalender)
    // }

    const renderPet = pets.map( pet => {
        return (
            <div key = {pet.id} className = "px-5 carousel-item">
                <PetCard key = {pet.id} pet = {pet}/>
            </div>
        )
    })
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <label htmlFor="my-modal-6" className="btn text-lg mb-5 ml-10">ADD A BABY</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"> Start the Journey with <span className = "uppercase text-primary-focus"> {nameInput}</span> </h3>
                <form  onSubmit = {handleSubmit} className = "form-control w-full max-w-xs">
                    <input
                        type = "text"
                        className = "input w-full bg-white focus:input-accent text-base"
                        placeholder = "name"
                        name = "name"
                        value = {nameInput}
                    onChange = { e => {setName(e.target.value)}}
                        />
                    {/* <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                    />  */}
                    <input
                        type = "text"
                        className = "input w-full bg-white focus:input-accent text-base"
                        placeholder = "date arrived at home"
                        name = "arrival_date"
                        value = {dateInput}
                        onChange = { e => {setDate(e.target.value)}}
                        />
                    <input
                        type = "text"
                        className = "input w-full bg-white focus:input-accent text-base"
                        placeholder = "image_url"
                        name = "image"
                        value = {imageInput}
                        onChange = { e => {setImage(e.target.value)}}
                        />
                    <input
                        type = "text"
                        className = "input w-full bg-white focus:input-accent text-base"
                        placeholder = "weight"
                        name = "weight"
                        value = {weightInput}
                        onChange = { e => {setWeight(e.target.value)}}
                        />
                    <input
                        type = "text"
                        className = "input w-full bg-white focus:input-accent text-base"
                        placeholder = "gender"
                        name = "gender"
                        value = {genderInput}
                    onChange = { e => {setGender(e.target.value)}}
                        />
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
                </form>
                    <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn text-lg hover:text-white"> x </label>
                    </div>
                </div>
                </div>
                {/* <div className = " relative overflow-hidden border-2 border-black p-10  carousel"> */}
                <div className = "carousel carousel-center w-5/6 p-10 space-x-4 rounded-box">


                    {/* <div>
                        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                    </div> */}

                    <div className = "flex items-stretch overscroll-x-auto">
                        {renderPet}
                    </div>
                </div>
        </div>
    )
}

export default PetPen
