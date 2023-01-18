import React,{useState} from "react"

function DiaryCard ({diary, setUserDiaries}) {
    const {date,title, content, tag, image, likes,id} = diary
    const [edit, setEdit] = useState(false)
    const [input, setInput] = useState("")

    const deleteDiary= id => {
        setUserDiaries(current => current.filter( diary => diary.id !== id ))
    }

    const handleDelete = () => {
        fetch(`/api/diaries/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then( () => { deleteDiary(id)} )
    }

    const updateContent = (updatedContent) => {
        setUserDiaries(current => {
            return current.map(content => {
             if (content.id === updatedContent.id){
               return updatedContent
             } else {
               return content
             }
            })
          })
        }
        
    const handleSubmit = e =>{
        e.preventDefault();
        fetch(`/api/diaries/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content: input})
        })
        .then ( res => res.json())
        .then (updateContent)
        setEdit(false)
    }

    return (
        <div>
            <div className="collapse mb-4 overscroll-contain bg-base-300">
                <input type="checkbox" className= "w-50 appearance-none"/>
                <div className="collapse-title text-xl flex space-between w-7/8">
                    <div className="indicator mb-2 text-base-200">
                        <span className="indicator-item indicator-center indicator-start badge badge-secondary">
                                <i className="fa-solid fa-heart text-sm mr-2"></i>
                                <span className="text-base">{likes}</span>
                        </span>
                            <img className= "flex object-cover w-48 h-24 rounded-t-lg mr-4 left-0" src = {image} alt = {title}/>
                        </div>
                    <p className="text-neutral--focus md:text-[2.5rem] text-base">{title}</p>
                    <div className="badge badge-outline text-neutral bg-white inline-grid mt-1 ml-1">{tag}</div>
                    <p className="text-sm text-base-400 mt-4">{date}</p>
                </div>
                {
                    edit?
                    <form className=" collapse-content form-control w-full text-secondary abosolute" onSubmit={handleSubmit}>
                        <div >
                            <textarea
                                className=" textarea w-full text-neutral text-base bg-white px-2 rounded-xl"
                                onChange={(e)=>{setInput(e.target.value)}}>
                                {content}
                            </textarea>
                        </div>
                        <button className="btn btn-sm text-base" type="submit">update</button>
                    </form>
                :
                    <div className="collapse-content text-secondary flex">
                        <i className="fa-solid fa-pen btn btn-sm flex" onClick={()=>{setEdit(true)}}></i>
                        <p className="object-center text-neutral bg-white px-2 rounded-xl">{content}</p>
                    </div>
                }
                <label className="btn btn-sm btn-circle absolute right-2 top-2 text-lg" onClick={handleDelete}>✕</label>
            </div>
        </div>
    )
}

export default  DiaryCard;
