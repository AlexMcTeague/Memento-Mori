import TaskForm from "../components/TaskForm";
import TaskGrid from '../components/TaskGrid';

function App() {
    return (
        <>
            <h1>Task List</h1>
            <button className="new-task-button">New Task</button>
            <TaskGrid />
            <div className="form-container">
                <TaskForm />
            </div>
        </>
    )
}

export default App