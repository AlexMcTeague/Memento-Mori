import { useState } from 'react';
import TaskForm from "../components/TaskForm";
import TaskGrid from '../components/TaskGrid';

function App() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const openNewForm = () => {
        setIsFormVisible(true);
    };

    const closeForm = () => {
        setIsFormVisible(false);
        { /* TODO: Refresh the grid to show changes from the form */ }
    };

    return (
        <>
            <h1>Task List</h1>
            <button className="new-task-button" disabled={isFormVisible} onClick={openNewForm}>{isFormVisible ? "Editing New Task" : "New Task"}</button>

            <TaskGrid />

            <div className="form-container">
                <TaskForm isVisible={isFormVisible} closeForm={closeForm} />
            </div>
        </>
    )
}

export default App