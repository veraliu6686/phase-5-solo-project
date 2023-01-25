import React, { useState } from "react"
import DiaryCard from "./DiaryCard"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


function DiaryMain ({currentUser}) {
    // get date from date picker
    const [startDate, setStartDate] = useState(new Date())
    const handleDateChange = (date) => {setStartDate(date)}
    const formattedDate = moment(startDate).format('MM/DD/YYYY');

    const [userDiaries, setUserDiaries] = useState(currentUser.diaries)
    const [titleInput, setTitle] = useState("")
    const [contentInput, setContent] = useState("")
    const [tagInput, setTag] = useState("")
    const [imageInput, setImage] = useState ("")
    const [petInput, setPet] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        const diary ={
            date: formattedDate,
            title: titleInput,
            content: contentInput,
            tag: tagInput,
            image: imageInput,
            likes: 0,
            pet_id: petInput,
            user_id: currentUser.id
        }
        fetch("/api/diaries",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({diary})
        })
        .then(res => res.json())
        .then(newMemo => setUserDiaries([newMemo, ...userDiaries]))
        setTitle("")
        setContent("")
        setTag("")
        setImage("")
        setPet("")
    }
    const renderDiary = userDiaries.map( diary => {
        return (
            <div className= "items-center" key = {diary.id}>
                <DiaryCard key = {diary.id} diary = {diary} setUserDiaries = {setUserDiaries}/>
            </div>
        )
    })
    const displayPetName = currentUser.pets.map( pet => {
        return(
                <option value = {pet.id} key = {pet.id} >{pet.name}</option>
        )
    })
    return (
        <div className="flex flex-col justify-center items-center mt-20 md:mt-10 ">
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn text-lg my-5 ml-10">record my day</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            {/* add memo form */}
            <div className="modal modal-bottom sm:modal-middle backdrop-blur-2xl">
                <div className="modal-box">
                <form onSubmit = {handleSubmit} className = "text-base form-control w-full max-w-xs">
                    <div className="tooltip tooltip-right" data-tip="date arrival at home">
                        <DatePicker
                            className = "input w-full bg-white focus:input-accent text-base"
                            selected={startDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <select
                        className = "select select-bordered w-full bg-white text-[1.5rem] text-base-200 mb-3 "
                        value = {petInput}
                        onChange ={e =>setPet(e.target.value)}>
                        <option diabled="true" value = "">choose a pet</option>
                        {displayPetName}
                    </select>
                    <input
                        className = "input w-full bg-white focus:input-accent text-base"
                        type = "text"
                        placeholder = "title"
                        name = "title"
                        value = {titleInput}
                        onChange = {(e)=>{setTitle(e.target.value)}}/>
                    <input
                        className = "input w-full bg-white focus:input-accent text-base"
                        type = "text"
                        placeholder = "tag"
                        name = "tag"
                        value = {tagInput}
                        onChange = {(e)=>{setTag(e.target.value)}}/>
                    <input
                        className = "input w-full bg-white focus:input-accent text-base"
                        type = "text"
                        placeholder = "image_url"
                        name = "image"
                        value = {imageInput}
                        onChange = { e => {setImage(e.target.value)}}/>
                    <textarea
                        className = "textarea w-full bg-white text-base mb-3"
                        type = "text"
                        placeholder = "content"
                        name = "content"
                        value = {contentInput}
                        onChange = {(e)=>{setContent(e.target.value)}}/>
                        <button type = "submit" className = "btn btn-primary text-base hover:text-white hover:text-base">Add Memo</button>
                </form>
                <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn text-base  hover:text-base">Yay!</label>
                    </div>
                </div>
            </div>
            <div className= "lg:w-1/2 w-4/5">
                {renderDiary}
            </div>
        </div>
    )
}

export default  DiaryMain;
