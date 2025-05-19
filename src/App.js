import { ToastContainer } from 'react-toastify';
import './App.css';
import ToDoList from './ToDoList';
import Tabs from './Tabs';

function App() {
  return (
    <div className="App">
      <ToDoList/>
      <Tabs/>
      <ToastContainer/>
    </div>
  );
}

export default App;
