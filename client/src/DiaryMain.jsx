import React from "react"
import DiaryCard from "./DiaryCard"

function DiaryMain () {

    // const renderEachDiary = () => {
    //     return(
    //         <div>
    //             <DiaryCard/>
    //         </div>
    //     )
    // }

    return (
        <div className = "con">
            <h1> Hello from diary main page</h1>
            <div>
                <DiaryCard/>
            </div>
        </div>
    )
}

export default  DiaryMain;
