const Todo = ({todo, deleteHandle, completeHandle, i}) =>{

    const todoClasses = []

    if (todo.completed){
        todoClasses.push("strikeout")
    }
    return(
        <div className="d-flex justify-content-center">
            <p className={todoClasses.join(" ")} style={{margin:"20px"}}>
                {todo.name}
                </p>
            <input checked={todo.completed} type="checkbox" style={{margin:"20px"}} onChange={(e)=>{completeHandle(i)}} />
            <button className="btn btn-danger" onClick={(e)=> {deleteHandle(i)}}>
                Delete
                </button>
        </div>
        )}

export default Todo;