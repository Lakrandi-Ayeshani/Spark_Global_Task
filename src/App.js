import './App.css';
import { tasks as initialTasks } from './data/data';
import TaskList from './screens/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const deleteTask = (id) => {
    const updateTasks = tasks.filter((oneTask) => oneTask._id !== id);
    setTasks(updateTasks);
  }

  return (
    <div className="App p-5">
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
