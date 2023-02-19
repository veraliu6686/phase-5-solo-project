import React, { useState } from "react"
export default function InventoryOrderReminder({orderDay, currentUser, todos, setTodos,}){
    const [supply, setSupply] = useState("")
    const handleSubmit = e =>{
    e.preventDefault()
    const todo={
        title: `order ${supply} on ${orderDay}`,
        category: "reminder",
        pet_id: currentUser.pets[1].id,
        user_id: currentUser.id,
    }
    fetch("/api/todos",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({todo})
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(todoData=>setTodos([...todos, todoData]))
      }
    })
    setSupply("")
  }
    return(
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <form className = "form-control" onSubmit={handleSubmit}>
                        <label className="label">
                            <span className="label-text text-[1.3rem]">Enter supply name</span>
                        </label>
                        <input
                            required
                            type = "text"
                            placeholder = "ex. Food Pellet"
                            className = "input input-bordered input-info w-full max-w-xs bg-white text-[1.2rem]"
                            value={supply}
                            onChange={e=>setSupply(e.target.value)}
                        />
                        <button className="btn w-1/4 bg-secondary-content text-secondary border-none text-[1.2rem]">Add it!</button>
                    </form>
                </label>
            </label>
        </>
    )
}
