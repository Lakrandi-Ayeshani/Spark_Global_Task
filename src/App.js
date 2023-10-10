import './App.css';
import { task } from './data/data';
import TaskList from './screens/TaskList';

function App() {
  const tasks = task;

  return (
    <div className="App container p-5">
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
