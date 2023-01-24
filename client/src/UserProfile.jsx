import React, {useState} from "react"

export default function UserProfile({currentUser, setCurrentUser}){
    const {username, avatar, followers, following, id}= currentUser
    const [avatarImg, setAvatarImg]=useState(null)
    console.log(currentUser)
    const handleSubmit=e=>{
        e.preventDefault()
        const  data = new FormData()
        data.append("avatar", avatarImg)
        fetch(`/api/users/${id}`, {
            method: 'PATCH',
            body:data
        })
        .then ( res => res.json())
        .then (data=>{console.log(data)})
    }

    return(
        <div className="flex flex-col justify-center items-center">
            <h1>Hi {username.toUpperCase()}</h1>
            <form className="form-control" onSubmit={handleSubmit}>
                <input type="file" className="file-input w-full max-w-xs text-base" accept="image/*" onChange={e=>setAvatarImg(e.target.files[0])}/>
                <button type="submit" className="btn text-base lowercase"> add avatar</button>
            </form>
            <img src={avatar} alt={username}/>
            <p>Followers:{followers.length}</p>
            <p>Following:{following.length}</p>
        </div>
    )
}
