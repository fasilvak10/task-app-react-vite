import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tittle, description);
    //document.getElementById("new-task").value = "";
    //document.getElementById("description").value = "";
    createTask({
      tittle,
      description,
    });
    setTittle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-700 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3 ">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe tu tarea"
          type="text"
          onChange={(e) => {
            setTittle(e.target.value);
          }}
          value={tittle}
          autoFocus
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-300 px-3 py-1 text-white rounded-md hover:bg-indigo-600">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
