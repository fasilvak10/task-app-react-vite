import TaskCard from './TaskCard'

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>no hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
      <TaskCard id={task.id} task={task} deleteTask={deleteTask} />  
      ))}
    </div>
  );
}

export default TaskList;
