import React,{useState} from "react"
export default function CommunityMemo({diary}){
    const {content, title, image, tag, likes, id} = diary
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
    console.log(count)
    }

    return(
        <div >
            <div className="card w-96 h-96 overflow-auto bg-white border-2 border-base shadow-xl">
            <figure><img src={image} alt={tag} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p className="text-[1.4rem]">{content}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{tag}</div>
                <span className="indicator-item indicator-center indicator-start badge badge-secondary cursor-pointer"  >
                    <i className="fa-solid fa-heart text-sm mr-2"></i>
                    <span className="text-base" onClick={handleLikes}>{likes}</span>
                </span>
                </div>
            </div>
            </div>
        </div>
    )
}
