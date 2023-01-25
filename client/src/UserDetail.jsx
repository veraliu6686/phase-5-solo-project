import React,{useState} from "react"
import { useParams } from "react-router-dom"
import UserPetsInfo from "./UserPetsInfo"
import FollowBtn from "./FollowBtn"


export default function UserDetail({users, currentUser,setUpdateFollow}) {
    let {name}= useParams()
    const [errors, setErrors] = useState([])

    const renderUserInfo = users.map(user=>{

        if (user.username == name){
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
                        <p> Followers: {user.followers.length}</p>
                        {user&&<FollowBtn user={user} currentUser ={currentUser} setErrors={setErrors} setUpdateFollow={setUpdateFollow}/>}
                         <div >
                        {errors? <div className = "text-warning place-self-center">
                            <p>{errors}</p>
                        </div> : null}
                    </div>
                    </div>
                    <div className="flex flex-wrap w-2/3 ml-10 my-4">
                        {renderPetInfo}
                    </div>
                </div>
            )
        }
    })

    return(
        <div className="glass flex justify-center overflow-hidden z-0 mt-28">
            <div>
                {renderUserInfo}
            </div>
        </div>
    )
}
