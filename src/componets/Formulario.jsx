import { useState } from "react"
import { v4 as uuidv4 } from "uuid"


function Formulario ({addTasks, task, setTask, setTasks, isEditing, setIsEditing}){
    const [alert, setAlert] = useState(false)
    const {title, description} = task

    const handleChange = (e) =>{
        const {name, value} = e.target
        setTask({
            ...task,
            [name]: value
        })
    }

    const submitForm = e =>{
        e.preventDefault()
        if(title.trim() === '' || description.trim() === ''){
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000);
            return
        }
        if(isEditing){
            //Editar registro existente
            setTasks((prevTask) => prevTask.map((item) => item.id === task.id ? task : item ))
            setIsEditing(false) //Cambiamos el modo para agregar
        }else{
            //Asignar ID
            task.id = uuidv4()
            //Guardar tarea
            addTasks(task)
        }
        //Reiniciar formulario
        setTask({
            title:'',
            description:''
        })
    }

    return(
        <div className="card">
            <div className="card-header">
            <h2>Task</h2>
            </div>
            <div className="card-body">
                {alert ? (
                <p className="alert alert-danger mt-2">
                Todos los campos son obligatorios
                </p>
                ) : null}
                <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="InputTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputDescription" className="form-label">Description</label>
                    <textarea name="description" id="description" value={description} onChange={handleChange} className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add A Task</button>
                </form>
            </div>
        </div>
    )
}

export default Formulario