import './App.css';
import TaskList from './screens/TaskList';
import { useState } from 'react';
import { getData } from './data/data.js';

function App() {
  const [tasks, setTasks] = useState(getData());
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
