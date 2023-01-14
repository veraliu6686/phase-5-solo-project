import React from "react"

function DiaryCard ({diary}) {
    const {date,title, content, tag} = diary
    return (
        <div>

            <div className="collapse mb-4 overscroll-contain">
                <input type="checkbox" />
                <div className="collapse-title text-xl flex">
                    {title}
                    <div className="badge badge-outline inline-grid mt-3">{tag}</div>
                    <p class="text-sm text-gray-700 mt-7">{date}</p>
                </div>
                <div className="collapse-content text-secondary max-w-lg p-3">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default  DiaryCard;
