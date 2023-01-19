import React from "react"
import { useNavigate, NavLink } from 'react-router-dom'

function Home ({currentUser}) {
     let navigate = useNavigate()
    const number = currentUser.number_of_pets
    const renderPet = currentUser.pets.map( pet => {
        return (
            <div className="flex flex-col items-center pb-10">
                <img className="w-48 h-48 mb-3 rounded-full shadow-lg object-cover" src = {pet.image} alt = {pet.name}/>
                <div className=" flex items-center mt-1">
                    <h5 className="text-2xl text-primary">{pet.name}</h5>
                    {pet.sterilized ?
                    <i className = "fa-solid fa-neuter"></i> :
                    ( pet.gender == "female") ?  <i className = "fa-solid fa-venus"></i> :<i className = "fa-solid fa-mars"></i>
                    }
                </div>
            </div>
        )
    })

    const reminder=(number)=>{
        if(number == 0){
            return (
                <h3> You current don't have any babys. Start
                    <span className="text-neutral cursor-pointer hover:text-secondary" onClick ={()=>{navigate('/pets')}}> HERE</span>
                    {/* <span className="text-neutral cursor-pointer hover:text-secondary"><NavLink to="/pets"> HERE </NavLink></span> */}
                </h3>
            )
        }if(number == 1){
            return(
                <h3> You only have 1 baby, start to record your
                    <span className="text-neutral cursor-pointer hover:text-secondary" onClick ={()=>{navigate('/memo')}}> MEMO</span>
                    {/* <span className="text-neutral cursor-pointer hover:text-secondary"><NavLink to="/memo"> Memo</NavLink></span> */}
                </h3>
            )
        } else{
            return(
                <h3> You current have <span className="text-neutral underline decoration-4"> {number} </span> babys. Take a good care of them!</h3>
            )
        }
    }

    return (
        <div className="flex flex-col items-center mt-20">
            <div className="mockup-window w-3/4 mb-10">
                <div className="flex justify-center text-center px-4 border-t-2 border-base-300">{reminder(number)}</div>
            </div>
            <div>
                {renderPet}
            </div>
        </div>
    )
}

export default Home;
