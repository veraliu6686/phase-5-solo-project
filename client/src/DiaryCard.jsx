import React from "react"

function DiaryCard ({diary}) {
    const {date,title, content, tag, image, likes} = diary
    return (
        <div>

            <div className="collapse mb-4 overscroll-contain bg-base-300">
                <input type="checkbox" className= "w-50 appearance-none"/>
                <div className="collapse-title text-xl flex">
                    <div className="indicator mb-2 text-base-200">
                        <span className="indicator-item indicator-center indicator-start badge badge-secondary">
                                <i className="fa-solid fa-heart text-sm mr-2"></i>
                                <span className="text-base">{likes}</span>
                        </span>
                            <img className= "flex object-cover w-48 h-24 rounded-t-lg mr-4" src = {image} alt = {title}/>
                        </div>
                    <p className="text-neutral--focus aqua:text-neutral">{title}</p>
                    <div className="badge badge-outline text-neutral bg-white inline-grid mt-1 ml-1">{tag}</div>
                    <p className="text-sm text-base-400 mt-4">{date}</p>
                </div>
                <div className="collapse-content text-secondary flex">
                    <p className="object-center text-neutral bg-white px-2 rounded-xl">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default  DiaryCard;
