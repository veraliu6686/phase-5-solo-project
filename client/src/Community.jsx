import React from "react"
import CommunityMemo from "./CommunityMemo"
import CommunityPet from "./CommunityPet"

export default function Community({pets, diaries}){

    const renderAllPets=pets.map(pet=>{
     return  <CommunityPet key={pet.id} pet={pet}/>
    })

    const renderAllDiaries =diaries.map(diary=>{
       return <CommunityMemo key={diary.id} diary={diary}/>
    })
    return(
        <div className="flex flex-col items-center">
            <div className="carousel carousel-center w-5/6 p-4 space-x-4 bg-neutral rounded-box my-10">
                {renderAllPets}
            </div>
            <div className="grid grid-rows-4 grid-flow-col gap-4">
                {renderAllDiaries}
            </div>
        </div>
    )
}
