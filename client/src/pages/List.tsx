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
            <button className="new-task-button" onClick={openNewForm}>New Task</button> { /* TODO: Restrict New Task button when form is visible */ }

            <TaskGrid />

            <div className="form-container">
                <TaskForm isVisible={isFormVisible} closeForm={closeForm} />
            </div>
        </>
    )
}

export default App