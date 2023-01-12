import React from "react"
import DiaryCard from "./DiaryCard"

function DiaryMain ({diaries}) {

    const renderDiary = diaries.map( diary => {
        return (
            <div>
                <DiaryCard key = {diary.id} diary = {diary}/>
            </div>
        )
    })

    return (
        <div className = "con">
            <h1> Hello from diary main page</h1>
            <div>
                {renderDiary}
            </div>
        </div>
    )
}

export default  DiaryMain;
