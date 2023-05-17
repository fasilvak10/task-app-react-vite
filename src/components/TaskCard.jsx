import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task, deleteTask }) {

  const valor = useContext(TaskContext)
  console.log(valor)

  return (
    <div>
      <h1>{task.tittle}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>
        eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
