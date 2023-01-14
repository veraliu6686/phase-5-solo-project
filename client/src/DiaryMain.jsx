import React, { useState } from "react"
import DiaryCard from "./DiaryCard"

function DiaryMain ({pets, diaries, setDiaries, currentUser}) {
    const [inputs, setInputs] = useState ({
        date: "",
        title: "",
        content: "",
        tag: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        fetch("/api/diaries",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...inputs, pet_id: pets.id, user_id: currentUser.id})
        })
        .then(res => res.json())
        .then(newMemo => setDiaries([newMemo, ...diaries]))
        setInputs({
        date: "",
        title: "",
        content: "",
        tag: ""
        })
    }
    // console.log(inputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs({ ...diaries, [name]: value })
    }

    const renderDiary = diaries.map( diary => {
        return (
            <div key = {diary.id}>
                <DiaryCard key = {diary.id} diary = {diary}/>
            </div>
        )
    })

    return (
        <div className = "con">
            <form onSubmit = {handleSubmit}>
                <input
                    placeholder = "date"
                    name = "date"
                    value = {inputs.date}
                    onChange = {handleChange}/>
                <input
                    placeholder = "title"
                    name = "title"
                    value = {inputs.title}
                    onChange = {handleChange}/>
                <input
                    placeholder = "content"
                    name = "content"
                    value = {inputs.content}
                    onChange = {handleChange}/>
                <input
                    placeholder = "tag"
                    name = "tag"
                    value = {inputs.tag}
                    onChange = {handleChange}/>
                    <button type = "submit" className = "btn btn-primary">Add Memo</button>
            </form>
            <div>
                {renderDiary}
            </div>
        </div>
    )
}

export default  DiaryMain;
