import React from "react"

function DiaryCard ({diary}) {
    const {date,title, content, tag} = diary
    return (
        <div>
            <hr></hr>
            <h3>{title}</h3>
            <p> {date}</p>
            <p>{tag}</p>
            <h4>{content}</h4>
        </div>
    )
}

export default  DiaryCard;
