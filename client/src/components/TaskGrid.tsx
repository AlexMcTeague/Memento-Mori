import { useState, useEffect } from 'react';
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { AllCommunityModule } from "ag-grid-community";
import type { ColDef } from "ag-grid-community";

// Row Data Interface
interface IRow {
    title: string;
    category: string;
    dueDate: Date | null;
    doom: number;
}

function TaskGrid() {
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
        { headerName: "Title", field: "title" },
        { headerName: "Category", field: "category" },
        { headerName: "Due Date", field: "dueDate" },
        { headerName: "Doom", field: "doom" }
    ]);

    const defaultColDef: ColDef = {
        flex: 1,
    };

    const [rowData, setRowData] = useState<IRow[]>([
        /* TODO: Task data goes here */
    ]);

    const [isRefreshing, setIsRefreshing] = useState(true);

    useEffect(() => {
        if (isRefreshing) {
            refreshGrid();
            setIsRefreshing(false);
        }
    }, [isRefreshing]);

    async function refreshGrid() {
        // Backend URL setup
        const backendPort = import.meta.env.BACKEND_PORT || 8080;
        const backendUrl = `http://localhost:${backendPort}/api/tasks`;

        try {
            const response = await fetch(backendUrl, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Data successfully retrieved from server:", result);

            const rows: IRow[] = [];
            const tasks = result as Array<{ body?: any }> | undefined;

            // TODO: Could probably use .map here
            if (tasks) {
                for (let i = 0; i < tasks.length; i++) {
                    const task = tasks[i];

                    rows.push({
                        title: task.body?.Title ?? "",
                        category: task.body?.Category ?? "",
                        dueDate: task.body?.DueDate ? new Date(task.body.DueDate) : null,
                        doom: Number(task.body?.Doom ?? 0)
                    });
                }
            }

            // Update the grid with the retrieved data
            setRowData(rows);
        } catch (error) {
            // TODO: Show a notification that the data could not be retrieved
        }
    }

    return (
        <AgGridProvider modules={[AllCommunityModule]}>
            <div style={{ width: "100%", height: "100%" }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                />
            </div>
        </AgGridProvider>
    );
}

export default TaskGrid;