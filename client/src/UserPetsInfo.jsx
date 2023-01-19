export default function UserPetsInfo({pet}){
     const {name, gender, image, weight, sterilized} = pet
    return(
        <div>
            <img src={image}/>
            <h1>{name}</h1>
             {sterilized ?
            <i className = "fa-solid fa-neuter"></i> :
            ( gender == "female") ?  <i className = "fa-solid fa-venus"></i> :<i className = "fa-solid fa-mars"></i>
            }
        </div>
    )
}
