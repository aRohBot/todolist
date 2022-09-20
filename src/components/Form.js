const Form = ({todo, setTodo, submitHandle}) => {
    return(
        <form onSubmit={e=> {submitHandle(e);}}>
            <input type="text" className="" value={todo} onChange={e => {setTodo(e.target.value)}} />
            <button className="btn btn-primary">Add</button>
        </form>
    )
}

export default Form;