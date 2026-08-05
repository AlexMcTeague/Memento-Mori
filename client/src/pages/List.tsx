import ItemForm from "../components/ItemForm";

function App() {
    return (
        <>
            <h1>Task List</h1>
            <button className="new-item-button">New Item</button>
            <div className="task-grid">
                <div className="task-grid-header">
                    <div>Title</div>
                    <div>Category</div>
                    <div>Due Date</div>
                    <div>Difficulty</div>
                </div>
                <div className="task-grid-body">
                    {/* Task items here */}
                </div>
            </div>
            <div className="form-container">
                <ItemForm />
            </div>
        </>
    )
}

export default App