export default function Todo({todo, setTodos, currentUser}){
    const deleteTodo= id => {
       setTodos(current => current.filter( todo => todo.id !== id ))
    }
    const handleDelete=()=>{
       fetch(`/api/todos/${todo.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then( () => {deleteTodo(todo.id) })
    }

    return(
        <>
           { currentUser.id == todo.user.id &&
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={todo.pet.image} alt={todo.pet.name}/>
                    </div>
                    </div>
                    <div>
                    <div className="font-bold"></div>
                    </div>
                </div>
                </td>
                <td>{todo.title}</td>
                <td>{todo.category}</td>
                <td><label className="btn btn-sm btn-circle text-lg" onClick={handleDelete}>✕</label></td>
            </tr>}
        </>
    )
}
