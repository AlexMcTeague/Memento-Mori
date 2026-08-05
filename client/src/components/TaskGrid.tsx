import { useState } from 'react';
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { AllCommunityModule } from "ag-grid-community";
import type { ColDef } from "ag-grid-community";

// Row Data Interface
interface IRow {
    title: string;
    category: string;
    dueDate: Date;
    difficulty: number;
}

function TaskGrid() {
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
        { headerName: "Title", field: "title" },
        { headerName: "Category", field: "category" },
        { headerName: "Due Date", field: "dueDate" },
        { headerName: "Difficulty", field: "difficulty" }
    ]);

    const defaultColDef: ColDef = {
        flex: 1,
    };

    const [rowData, setRowData] = useState<IRow[]>([
        /* TODO: Task data goes here */
    ]);

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