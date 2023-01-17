import React, {useState, useEffect} from "react"

function PetCard ({pet, setUserPets}) {
    const {name, gender, image, weight, sterilized, id} = pet
     const [submited, setSubmited] = useState(false)
    // const [trueInput, setTrue] = useState(false)
    const [inputs, setInputs] = useState({
        name:"",
        gender:"",
        image:"",
        weight:"",
        sterilized:""
    })

    useEffect(()=>{
        fetch(`api/pets/${id}`)
        .then(res => res.json())
        .then(petData => {setInputs(petData)})
    },[])

    const updatePet = (updatedPet) => {
         setUserPets(current => {
            return current.map(pet => {
             if (pet.id === updatedPet.id){
               return updatedPet
             } else {
               return pet
             }
            })
          })
    }

    const handleEditSubmit = e =>{
        e.preventDefault()
        fetch(`/api/pets/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        })
        .then ( res => res.json())
        .then (pet=>{updatePet(pet)})
        setSubmited(true)
    }

    const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

    // const handleClick=(e)=>{
    //     setTrue(!trueInput)
    //     console.log(e.targe.value)
    // }

    return (

        <div>
            {/* edit pet form */}
            <input type="checkbox" id={`manage${id}`} className="modal-toggle" />
            <label htmlFor={`manage${id}`} className="modal cursor-pointer backdrop-blur-2xl">
                <label className="modal-box bg-slate-100 relative" htmlFor="">
                    <h3 className="font-bold text-3xl text-center text-neutral uppercase">{name}</h3>
                    <div className="flex justify-center">
                    <div className="flex-col ">
                    <form className="form-control py-5" onSubmit={handleEditSubmit}>
                        <input
                            name="name"
                            value={inputs.name}
                            onChange={handleChange}
                            className="input input-bordered w-full max-w-xs text-base placeholder:text-neutral--focus"
                            placeholder={name}/>
                        <input
                            name="gender"
                            value={inputs.gender}
                            onChange={handleChange}
                            className="input input-bordered w-full max-w-xs text-base text-neutral placeholder:text-neutral--focus"
                            placeholder={gender}/>
                        <input
                            name="weight"
                            value={inputs.weight}
                            onChange={handleChange}
                            className="input input-bordered w-full max-w-xs text-base text-neutral  placeholder:text-neutral--focus"
                            placeholder={weight}/>
                        <input
                            name="image"
                            value={inputs.image}
                            onChange={handleChange}
                            className="input input-bordered w-full max-w-xs text-base text-neutral placeholder:text-neutral--focus"
                            placeholder={image}/>
                        {
                        sterilized ?
                        <></> :
                         <select
                            name="sterilized"
                            value = {inputs.sterilized}
                            onChange = {handleChange}
                            className = "select select-bordered w-full max-w-xs text-[1.5rem] text-neutral mb-3">
                            <option diabled="true" value = "">sterilized ?</option>
                            <option value = "true">YES</option>
                        </select>
                        }
                        <button className = "btn text-base border-0 hover:bg-warning hover:text-white " htmlFor = {`manage${id}`} type="submit"> confirm</button>
                    </form>
                    { submited?
                        <div className="bg-success h-8 opacity-50 rounded-lg w-5">
                            <div className="flex">
                                <i className="fa-solid fa-check text-base"></i>
                                <span className="text-base">submited!</span>
                            </div>
                        </div>
                    : <></>
                    }
                    </div>
                    </div>
                </label>
            </label>
            {/* pet info */}
            <div className = "indicator mx-5">
                {/* manage pet button */}
                <div className="indicator-item indicator-center indicator-bottom badge badge-primary">
                    <label htmlFor={`manage${id}`} className="btn btn-warning-focus rounded-full lowercase text-base hover:text-base hover:text-white">Manage</label>
                </div>
                <div className="w-full max-w-sm border-secondary rounded-lg shadow-md">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-48 h-48 mb-3 rounded-full shadow-lg object-cover" src = {image} alt = {name}/>
                        <div className=" flex items-center mt-1">
                            <h5 className="text-2xl text-primary">{name}</h5>
                            {sterilized ?
                            <i className = "fa-solid fa-neuter"></i> :
                            ( gender == "female") ?  <i className = "fa-solid fa-venus"></i> :<i className = "fa-solid fa-mars"></i>
                            }
                        </div>
                        <span className= "text--slate-600 text-base">Weight: {weight}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetCard;
