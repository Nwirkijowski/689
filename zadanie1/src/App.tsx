import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, name: "zrobic cos gdzies", done: false },
    { id: 2, name: "zrobic cos tam", done: false },
    { id: 3, name: "byc gdzies kiedys", done: false }
  ]);

  const [filter, setFilter] = useState("wszystkie");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "wykonane") return task.done;
    if (filter === "niewykonane") return !task.done;
    return true;
  });


  return (
    <div>
      <h1>Lista zadań</h1>

      <ul>
        {filteredTasks.map((task) => (
     <li key={task.id}>
      <input
      type="checkbox"
      checked={task.done}
      onChange={() => changeStatus(task.id)}
  />
  {task.name}
</li>
  ))}
</ul>

<p>
  Pozaostało zadań: {tasks.filter((task) => !task.done).length}
</p>
    </div>
  );
  
 function changeStatus(id: number) {
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        id: task.id,
        name: task.name,
        done: !task.done,
      };
    }
    return task;
  });
  setTasks(newTasks);
}


}

export default App;