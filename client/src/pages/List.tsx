import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskGrid from '../components/TaskGrid';
import '../css/list.css'

function App() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [refreshTracker, setRefreshTracker] = useState(0);

    const openNewForm = () => {
        setIsFormVisible(true);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    const refreshGrid = () => {
        setRefreshTracker((current) => current + 1);
    }

    return (
        <>
            <div className="list-page-container">
                <h1>Task List</h1>
                <button className="new-task-button" disabled={isFormVisible} onClick={openNewForm}>{isFormVisible ? "Editing New Task" : "New Task"}</button>

                <TaskGrid refreshTracker={refreshTracker} />

                <TaskForm isVisible={isFormVisible} closeForm={closeForm} refreshGrid={refreshGrid} />
            </div>
        </>
    )
}

export default App