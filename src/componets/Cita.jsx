function Cita ({task, removeTask, editTask}){

    const {id, title, description} = task
    return(
        <div className="card mt-2">
            <div className="card-body">
            <h4 className="card-title">Task</h4>
            <p className="card-text">
                Title: <span>{title}</span>
            </p>
            <p className="card-text">
                Description: <span>{description}</span>
            </p>
            <button 
            className="btn btn-danger"
            onClick={() => removeTask(id)}
            >
                Delete Task
            </button>
            <button 
            className="btn btn-warning m-3"
            onClick={() => editTask(id)}

            >
                Update Task
            </button>
            </div>
        </div>
    )
}
export default Cita