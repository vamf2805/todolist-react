import { useState } from 'react'
import Header from './componets/Header'
import Formulario from './componets/Formulario'
import Cita from './componets/Cita'

function App() {

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState({
    title:'',
    description:'',
  })
  const [isEditing, setIsEditing] = useState(false)

  const addTasks = (task) =>{

    // if(isEditing){
    //   //Editar registro existente
    //   setTasks((prevTask) => prevTask.map((item) => item.id === task.id ? task : item ))
    //   setIsEditing(false) //Cambiamos el modo para agregar
    // }else{
      //Crea una nueva tarea
    setTasks([...tasks, task])
  }

  const removeTask = (id) =>{
    console.log('Eliminar tarea', id)
    setTasks((prevTask) => prevTask.filter(task => task.id !== id))
  }

  const editTask = (id) =>{
    console.log('Editando...', id)
    //Cargar registro seleccionado al formulario
    const recordToEdit = tasks.find((task) => task.id === id)
    setTask(recordToEdit)
    setIsEditing(true)
  }

  //Mensaje condicional
  const message = tasks.length === 0 ? (
      <div className="alert alert-warning">There are no registered tasks</div>
    ) : null;

  return (
    <>
      <Header/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <Formulario
              addTasks = {addTasks}
              task={task}
              setTask={setTask}
              setTasks={setTasks}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          </div>
          <div className="col-md-8">
            {message}
            {tasks.map(task =>(
              <Cita
                key={task.id}
                task={task}
                removeTask={removeTask}
                editTask={editTask}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
