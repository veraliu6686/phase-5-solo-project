import React from "react"
import { useNavigate } from 'react-router-dom'

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
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="mockup-window w-3/4 mb-10">
                <div className="flex justify-center text-center px-4 border-t-2 border-base-300">{reminder(number)}</div>
            </div>
            {/* <div>
                {renderPet}
            </div> */}
            <div className="w-3/4 text-center flex flex-col items-center">
                <h2>TODO LIST</h2>
                <div className="text-[1.5rem] md:text-base ">
  <table className="table" >

    <thead>
      <tr>
        <th className="text-base">For</th>
        <th className="text-base">Title</th>
        <th className="text-base">Category</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>
          <div className="flex items-center space-x-3">
            {/* <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">

              </div>
            </div> */}
            <div>
              <div className="font-bold">{currentUser.username}</div>
            </div>
          </div>
        </td>
        <td>
          add your new baby <span className="text-neutral cursor-pointer hover:text-secondary" onClick ={()=>{navigate('/pets')}}> HERE</span>
        </td>
        <td>todo</td>
        <td><label className="btn btn-sm btn-circle text-lg">✕</label></td>
      </tr>

      <tr>
        <td>
          <div className="flex items-center space-x-3">
            {/* <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">

              </div>
            </div> */}
            <div>
              <div className="font-bold">{currentUser.username}</div>
            </div>
          </div>
        </td>
        <td>
          recorder your day <span className="text-neutral cursor-pointer hover:text-secondary" onClick ={()=>{navigate('/pets')}}> HERE</span>
        </td>
        <td>todo</td>
        <td><label className="btn btn-sm btn-circle text-lg">✕</label></td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </tfoot>

  </table>
</div>
            </div>
        </div>
    )
}

export default Home;
