import ItemForm from "../components/ItemForm";
import TaskGrid from '../components/TaskGrid';

function App() {
    return (
        <>
            <h1>Task List</h1>
            <button className="new-item-button">New Item</button>
            <TaskGrid />
            <div className="form-container">
                <ItemForm />
            </div>
        </>
    )
}

export default App