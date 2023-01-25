import React,{useState} from "react"
import CommunityMemo from "./CommunityMemo"
import CommunityPet from "./CommunityPet"

export default function Community({pets, diaries}){
    const [search, setSearch] = useState("")

    const searchPet = pets.filter(pet=>{
        return(
            pet.name.toLowerCase().includes(search.toLowerCase()) || pet.species.toLowerCase().includes(search.toLowerCase())
        )
    })
    const searchMemo = diaries.filter(diary=>{
        return(
            diary.title.toLowerCase().includes(search.toLowerCase()) || diary.content.toLowerCase().includes(search.toLowerCase())
        )
    })
    const renderAllPets = searchPet.map(pet=>{
     return  <CommunityPet key={pet.id} pet={pet}/>
    })

    const renderAllDiaries = searchMemo.map(diary=>{
       return <CommunityMemo key={diary.id} diary={diary}/>
    })
    return(
        <div className="flex flex-col items-center mt-10">
           <div className="form-control mt-20 md:mt-0">
                <div className="input-group">
                    <input
                        type="text"
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
                        placeholder="Search…"
                        className="input input-bordered text-base bg-slate-200" />
                    <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                   <a href="https://www.petfinder.com/"  target="_blank"> <i className="fa-solid fa-paw text-base ml-10 mt-2 cursor-pinter"></i></a>
                </div>
            </div>
            <div className="carousel carousel-center w-5/6 p-4 space-x-4 bg-neutral rounded-box my-10">
                {renderAllPets}
            </div>
            <div className="sm:columns-3 gap-4 columns-2">
                {renderAllDiaries}
            </div>
        </div>
    )
}
