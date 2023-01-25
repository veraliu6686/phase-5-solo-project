export default function UserPetsInfo({pet}){
     const {name, gender, image, sterilized} = pet
    return(
        <div>
            <div className="card bg-base-100 w-36 h-36 shadow-xl glass">
            <figure><img className="w-full h-24 object-cover" src={image} alt={name}/></figure>
            <div className="flex justify-center">
                <h2 className="card-title">{name}</h2>
                 {sterilized ?
            <i className = "fa-solid fa-neuter"></i> :
            ( gender == "female") ?  <i className = "fa-solid fa-venus"></i> :<i className = "fa-solid fa-mars"></i>
            }
            </div>
            </div>
        </div>
    )
}
