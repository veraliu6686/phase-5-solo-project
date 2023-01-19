import { useParams } from "react-router-dom"
import UserPetsInfo from "./UserPetsInfo"


export default function UserDetail({users}) {
    let {name}= useParams()

    const renderUserInfo=users.map(user=>{
        if (user.username == name){
            // console.log(user.avatar)
            const renderPetInfo = user.pets.map(pet=>{
                return <UserPetsInfo key={pet.id} pet={pet}/>
            })

            return(
                <div key={user.id}>
                    <img src={user.avatar}/>
                    {renderPetInfo}
                </div>
            )
        }
    })
    return(
        <div>
            <h1> {name}'s Datail </h1>
            {renderUserInfo}
        </div>
    )
}
