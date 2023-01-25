import React, {useState} from "react"

export default function UserProfile({currentUser, setCurrentUser}){
    const {username, avatar, followers, following}= currentUser

    return(
        <div className="flex flex-col justify-center items-center">
            <h1>Hi {username.toUpperCase()}</h1>
            <p>Followers:{followers.length}</p>
            <p>Following:{following.length}</p>
        </div>
    )
}
