import { useState } from "react";
import { tasks } from "../data/task";

function TaskForm({ createTask }) {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

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
    <form action="" onSubmit={handleSubmit}>
      <input
        id="new-task"
        placeholder="Escribe tu tarea"
        type="text"
        onChange={(e) => {
          setTittle(e.target.value);
        }}
        value={tittle}
        autoFocus
      ></input>
      <textarea
        id="description"
        placeholder="escribe la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
