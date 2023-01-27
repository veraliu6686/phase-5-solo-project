import React,{useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import Todo from "./Todo"


function Home ({currentUser}) {
  let navigate = useNavigate()
  const number = currentUser.number_of_pets
  const [todos, setTodos]=useState([])
  const [show, setShow] = useState(false)
  const [petInput, setPet] = useState("")
  const [detailInput,setDetail] = useState("")
  const [categoryInput, setCategory] = useState("")

  useEffect(()=>{
    fetch("/api/todos")
    .then(res=>res.json())
    .then(setTodos)
  },[])

  const renderTodo= todos.map(todo=>{
    return <Todo key={todo.id} todo={todo} setTodos={setTodos} currentUser={currentUser}/>
  })
  const renderPet = currentUser.pets.map( pet => {
    return (
      <option key={pet.id} value={pet.id}>{pet.name}</option>
    )
  })

  const handleSubmit=e=>{
    e.preventDefault()
    const todo={
      title: detailInput,
      category: categoryInput,
      pet_id: petInput,
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
      setCategory("")
      setPet("")
      setDetail("")
      setShow(false)
      }
    })
  }

  const reminder=(number)=>{
      if(number == 0){
          return (
              <h3> You current don't have any babys. Start
                  <span className="text-neutral cursor-pointer hover:text-secondary" onClick ={()=>{navigate('/pets')}}> HERE</span>
              </h3>
          )
      }if(number == 1){
          return(
              <h3> You only have 1 baby, start to record your
                  <span className="text-neutral cursor-pointer hover:text-secondary" onClick ={()=>{navigate('/memo')}}> MEMO</span>
              </h3>
          )
      } else{
          return(
              <h3> You current have <span className="text-primary underline decoration-4"> {number} </span> babys. Take a good care of them!</h3>
          )
      }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
        <div className="mockup-window w-3/4 mb-10">
            <div className="flex justify-center text-center px-4 border-t-2 border-base-300">{reminder(number)}</div>
        </div>
        <div className="w-3/4 text-center flex flex-col items-center cursor-pointer">
            <h2 className="animate-bounce" onClick={()=>{setShow(!show)} }>TODO LIST</h2>
              {show?
                <form  onSubmit = {handleSubmit} className = "form-control w-full max-w-xs bg-neutral p-5  mb-5 glass">
                  <div className="tooltip tooltip-right" data-tip="title">
                    <label className="label">
                      <span className="label-text text-base">What is your plan?</span>
                    </label>
                      <input
                          type = "text"
                          className = "input w-full focus:input-accent text-base placeholder:text-neutral"
                          placeholder = "give a brief detail"
                          value = {detailInput}
                          onChange = { e => {setDetail(e.target.value)}}
                          />
                  </div>
                    <label className="label">
                      <span className="label-text text-base">It's for?</span>
                    </label>
                  <select
                      className = "select select-bordered w-full text-[1.5rem] text-neutral mb-3"
                      value = {petInput}
                      onChange = { e => {setPet(e.target.value)}}
                      >
                      <option diabled="true" value = "">choose one</option>
                      {renderPet}
                  </select>
                  <div className="tooltip tooltip-right" data-tip="category">
                    <label className="label">
                      <span className="label-text text-base">Give a category</span>
                    </label>
                      <input
                        type = "text"
                        className = "input w-full focus:input-accent text-base placeholder:text-neutral"
                        placeholder = "type"
                        value = {categoryInput}
                        onChange = { e => {setCategory(e.target.value)}}
                        />
                  </div>
                  <button type = "submit" className = "btn text-base hover:text-white hover:text-base">Add</button>
                </form>
              :<></>}
            <div className="text-[1.5rem] md:text-base">
            <table className="table" >
              <thead>
                <tr>
                  <th className="text-base">For</th>
                  <th className="text-base">Detail</th>
                  <th className="text-base">Category</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{currentUser.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    add your new baby <span className="text-primary cursor-pointer hover:text-secondary" onClick={()=>{navigate('/pets')}}> HERE</span>
                  </td>
                  <td>todo</td>
                  <td></td>
                </tr>

                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{currentUser.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    recorder your day <span className="text-primary cursor-pointer hover:text-secondary" onClick ={()=>{navigate('/pets')}}> HERE</span>
                  </td>
                  <td>todo</td>
                  <td></td>
                </tr>
                {renderTodo}
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
