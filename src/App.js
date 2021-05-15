import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "task lowla",
      day: "01-01-08",
      reminder: true,
    },
    {
      id: 2,
      text: "task thenya",
      day: "01-01-08",
      reminder: true,
    },
    {
      id: 3,
      text: "task lowla",
      day: "01-01-08",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } 
        : task
      )
    );
  };

  const addTask =(task)=>{
const id = Math.floor(Math.random()*10000)+1  
const newTask={id,...task}
setTasks([...tasks,newTask])
}

  return (
    <div className="container">
    
      <Header onAdd={()=>setshowAddTask(!showAddTask)} showAdd={showAddTask} />
{   showAddTask &&   <AddTask  onAdd={addTask}/>
}      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show !"
      )}
    </div>
  );
}

export default App;
