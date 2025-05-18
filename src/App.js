import { ToastContainer } from 'react-toastify';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoList/>
      <ToastContainer/>
    </div>
  );
}

export default App;
