import { useState } from "react";

const Todo = () => {

    const [todoList, setTodoList] = useState([]);
    const [tarea, setTarea] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, tarea]);
        setTarea("");
    }

    const handleTarea = (evento) => {
        setTarea(evento.target.value)
    }

    const handleRemove = (index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Agregar</h1>
                    <form onSubmit={handleSubmit}>
                        <input type='text' id='tarea' value={tarea} onChange={handleTarea}/>
                        <button className="btn-primary" type='submit'>Agregar</button>
                    </form>
                </div>
                <div className="col">
                    <h1>Lista de tareas</h1>
                    <ul className="list-group">
                        {todoList.map((todo, index) =>
                            <li key={index} className="list-group-item flex align-middle">
                                <div className="row align-middle">
                                    <div className="col p-1"> {index + 1} - {todo} </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleRemove(index)}>Remover
                                        </button>
                                    </div>
                                </div>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo;