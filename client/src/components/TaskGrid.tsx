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

type TaskGridProps = {
    refreshTracker: number;
}

function TaskGrid({ refreshTracker: refreshTracker }: TaskGridProps) {
    const [rowData, setRowData] = useState<IRow[]>([]);

    const [colDefs] = useState<ColDef<IRow>[]>([
        { headerName: "Title", field: "title" },
        { headerName: "Category", field: "category" },
        { headerName: "Due Date", field: "dueDate" },
        { headerName: "Doom", field: "doom" }
    ]);

    const defaultColDef: ColDef = {
        filter: true,
        flex: 1,
    };

    const [isLoading, setIsLoading] = useState(true);
    const [noRowsMessage, setNoRowsMessage] = useState('No rows to show.');

    // By default, useEffect triggers every render. 
    // By passing an array of objects to watch, useEffect will only trigger when one of those values changes.
    // Passing an empty array tells useEffect to only run once on reload
    useEffect(() => {
        void refreshGrid();
    }, [refreshTracker]);

    async function refreshGrid() {
        // Backend URL setup
        const backendPort = import.meta.env.BACKEND_PORT || 8080;
        const backendUrl = `http://localhost:${backendPort}/api/tasks`;

        setIsLoading(true);
        setNoRowsMessage('No rows to show.');

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
            setIsLoading(false);
        } catch (error) {
            setNoRowsMessage(
                `<div style="color: #d32f2f; font-weight: bold; text-align: center;">
                Failed to Fetch Tasks<br/>
                <span style="font-size: 13px; color: #666; font-weight: normal;">${error}</span>
            </div>`
            );
            setIsLoading(false);
            // TODO: Show a notification that the data could not be retrieved
        }
    }

    return (
        <AgGridProvider modules={[AllCommunityModule]}>
            <div className="ag-div" style={{ width: "100%", height: "100%" }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    loading={isLoading}
                    overlayLoadingTemplate={
                        `<div class="ag-overlay-loading-center">
                        <span class="ag-icon ag-icon-loading" style="margin: 0" aria-hidden="true"></span>
                        <span style="margin-left: 8px;">Fetching Tasks...</span>
                        </div>`
                    }
                    overlayNoRowsTemplate={noRowsMessage}
                />
            </div>
        </AgGridProvider>
    );
}

export default TaskGrid;