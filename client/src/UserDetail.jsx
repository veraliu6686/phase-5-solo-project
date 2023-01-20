import React,{useState} from "react"
import { useParams } from "react-router-dom"
import UserPetsInfo from "./UserPetsInfo"


export default function UserDetail({users, currentUser}) {
    let {name}= useParams()

    const renderUserInfo = users.map(user=>{
        const [followed, setFollowed] = useState(false)
        const handleFollow=()=>{

            const follow = {
                followed_id: user.id,
                follower_id: currentUser.id
            }
            fetch("/api/follows",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({follow})
            })
            .then(res => {
                if(res.ok){
                    res.json()
                    .then(data=>{console.log(data)})
                }
            })
            setFollowed(!followed)
            console.log(user.id, currentUser.id)
        }

        if (user.username == name){
            // console.log(user.avatar)
            const renderPetInfo = user.pets.map(pet=>{
                return <UserPetsInfo key={pet.id} pet={pet}/>
            })

            return(
                <div key={user.id} className="flex justify-center">
                    <div className="flex flex-col justify-center ml-4">
                        <div>
                            <img className=" w-48 inline-block overflow-hidden rounded-full" src={user.avatar}/>
                            <h1 className="text-center"> {name}</h1>
                        </div>
                        <button className="btn btn-warning rounded-full lowercase text-base hover:text-base hover:text-white items-center" onClick={handleFollow}> {followed? "unfollow ": "follow"}
                        </button>
                    </div>
                    <div className="flex flex-wrap w-2/3 ml-10 my-4">
                        {renderPetInfo}
                    </div>
                </div>
            )
        }
    })
    return(
        <div className="glass flex justify-center overflow-hidden z-0">
            <div>
                {renderUserInfo}
            </div>
        </div>
    )
}
