import React,{useState} from "react"
import { useNavigate } from 'react-router-dom'

export default function CommunityMemo({diary}){
    let navigate = useNavigate()
    const {content, title, image, tag, likes, id, user} = diary
    const [count, setCount] = useState(likes)

    const handleLikes = (e) =>{
        fetch(`/api/diaries/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                likes: ++e.target.innerHTML
                })
        })
        .then(res => res.json())
        .then(newCount => {
           setCount(newCount)
        })
    // mean to be here
    console.log(count)
    }

    return(
        <div >
            <div className="card md:w-72 w-48 overflow-auto bg-white border-2 border-base shadow-xl mb-8">
            <figure onClick={()=>navigate(`/users/${user.username}`)}><img src={image} alt={tag} /></figure>
            <div className="card-body">
                <h2 className="card-title text-neutral">
                {title}
                </h2>
                <p className="text-[1.4rem] text-neutral">{content}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{tag}</div>
                <span className="indicator-item indicator-center indicator-start badge badge-secondary cursor-pointer"  >
                    <i className="fa-solid fa-heart text-sm mr-2 hover:animate-spin"></i>
                    <span className="text-base" onClick={handleLikes}>{likes}</span>
                </span>
                </div>
            </div>
            </div>
        </div>
    )
}
