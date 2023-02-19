import React, { useState } from "react"
import InventoryOrderReminder from "./InventoryOrderReminder"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InventoryCalc({currentUser, todos, setTodos,}){
    const [startDate, setStartDate] = useState(new Date())
    const handleDateChange = (date) => {setStartDate(date)}
    const [selectedForm, setSelectedForm] = useState("weight")
    const [countPerWeek, setCountPerWeek] = useState("")
    const [totalCount, setTotalCount] = useState("")
    const [weightPerDay, setWeightPerDay] = useState("")
    const [totalWeight, setTotalWeight] = useState("")
    const [result, setResult] = useState ("")
    const [error, setError] = useState ("")
    let leftDays
    if (selectedForm === "weight"){
        leftDays = Math.floor(totalWeight / weightPerDay)
    } else if(selectedForm === "count"){
        leftDays = Math.floor((totalCount / countPerWeek) * 7)
    }
    const orderDay = new Date( startDate.getTime() + (leftDays-7) * 24 * 60 * 60 * 1000)

    const WeightForm = () =>{
        return(
        <form onSubmit = {handleWeightSubmit}>
            <div className = "form-control text-center items-center pl-5 pb-4">
                <span className = "text-[1.4rem]">enter opened date</span>
                <DatePicker
                    className = "input text-[1.5rem]"
                    selected = {startDate}
                    onChange = {handleDateChange}
                />
                <span className = "text-[1.4rem]">enter weight(g) used per day</span>
                <input
                    type = "number"
                    min = "1"
                    className = "input input-bordered text-[1.5rem]"
                    value = {weightPerDay}
                    onChange = {e=>setWeightPerDay(e.target.value)}
                />
                <span className = "text-[1.4rem]">enter total weight in grams</span>
                <input
                    type = "number"
                    min = "1"
                    className = "input input-bordered text-[1.5rem]"
                    value = {totalWeight}
                    onChange = {e=>setTotalWeight(e.target.value)}
                />
                <button className = "btn btn-sm w-1/3 text-[1.5rem]">Calculate</button>
            </div>
        </form>
        )
    }
    const handleWeightSubmit=(e)=>{
        e.preventDefault()
        if(weightPerDay <= totalWeight && weightPerDay !== "" &&  totalWeight !== ""){
            setResult(`You should place your order by ${orderDay.toLocaleDateString()}, one week before you run out of supplies.`)
        }else if(weightPerDay > totalWeight ){
            setError("Please double-check the number you entered. The daily usage must be less than and equal to the total weight.")
            setTimeout(() => setError(null),3000)
        }else{
            setError("inputs can't be blank")
        }
    }
    const CountForm = () =>{
        return(
            <form onSubmit = {handleCountSubmit}>
                <div className = "form-control text-center items-center pl-5 pb-4">
                    <span className = "text-[1.4rem]">enter opened date</span>
                    <DatePicker
                        className = "input text-[1.5rem]"
                        selected = {startDate}
                        onChange = {handleDateChange}
                    />
                    <span className = "text-[1.4rem]">enter used amount per week</span>
                    <input
                        type = "number"
                        min = "1"
                        className = "input input-bordered text-[1.5rem]"
                        value = {countPerWeek}
                        onChange = {e =>{setCountPerWeek(e.target.value)}}
                    />
                    <span className = "text-[1.4rem]">enter total amount</span>
                    <input
                        type = "number"
                        min = "1"
                        className = "input input-bordered text-[1.5rem]"
                        value = {totalCount}
                        onChange = {e=>{setTotalCount(e.target.value)}}
                    />
                    <button className = "btn btn-sm w-1/3 text-[1.5rem]">Calculate</button>
                </div>
            </form>
        )
    }
    const handleCountSubmit=(e)=>{
        e.preventDefault()
        if(countPerWeek <= totalCount && countPerWeek !== "" && totalCount !== "" ){
            setResult(`You should place your order by ${orderDay.toLocaleDateString()}, one week before you run out of supplies.`)
            // setTimeout(()=>setResult(null),4000)
        }else if(countPerWeek > totalCount ){
            setError("Please double-check the number you entered. The weekly usage must be less than and equal to the total amount.")
            setTimeout(()=>setError(null),3000)
        }else{
            setError("inputs can't be blank")
        }
        setCountPerWeek("")
        setTotalCount("")
    }
    const handleFormChange=(e)=>{
        setSelectedForm(e.target.value)
    }

    let formCon;
    if (selectedForm === "weight") {
        formCon = <WeightForm/>
    }else if(selectedForm === "count"){
        formCon = <CountForm/>
    }
    return (
        <div>
            <label htmlFor="calculator" className="btn text-base">Discover</label>
            <input type="checkbox" id="calculator" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative md:w-6/7">
                <label htmlFor="calculator" className="btn btn-sm btn-circle absolute right-2 top-3 backdrop-blur-2xl">✕</label>
                <h3 className="text-lg font-bold text-primary">Didn't know when to order pet supplies?</h3>
                <p className="py-4 text-[1.5rem] font-bold text-neutral drop-shadow-xl hover:text-primary">click on the method you want to use to calculate it</p>
                {/* add reminder to todo list */}
                { currentUser.pets.length > 0 && result ? <label htmlFor="my-modal-4" className="btn text-slate-white text-[1.3rem] bg-primary border-none backdrop-blur-3xl">setup a reminder</label> :<></>}
                <InventoryOrderReminder orderDay = {orderDay.toLocaleDateString()} currentUser={currentUser} todos={todos} setTodos={setTodos}/>
                {/* calculator form*/}
                <div className="drop-shadow-lg">
                    <div className="form-control w-2/5 pl-2 drop-shadow-xl">
                        <label className="label cursor-pointer" htmlFor="weight">
                            <span className="label-text text-base text-primary">by weight</span>
                            <input
                                type="radio"
                                name="radio-2"
                                value = "weight"
                                className="radio radio-primary ml-2 mt-4 border-2 checked:neutral" checked={selectedForm === "weight"}
                                onChange={handleFormChange}
                                />
                        </label>
                    </div>
                    <div className="form-control w-2/5 pl-2 drop-shadow-xl">
                        <label className="label cursor-pointer" htmlFor="count">
                            <span className="label-text text-base text-primary">by quantity</span>
                            <input
                                type="radio"
                                name="radio-2"
                                value = "count"
                                className="radio radio-primary ml-2 mt-4 checked:neutral" checked={selectedForm === "count"}
                                onChange={handleFormChange}
                                />
                        </label>
                    </div>
                    {formCon}
                    {result && !error ? <div className="alert alert-info shadow-lg text-[1.5rem]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>{result}</span>
                        </div>
                    </div>
                    :<></>}
                    {error ? <div className="alert alert-warning shadow-lg text-[1.5rem]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>{error}</span>
                        </div>
                    </div>
                    : <></>}
                </div>
            </div>
            </div>
        </div>
    )
}
