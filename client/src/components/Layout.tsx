import { Outlet } from 'react-router';
import Sidebar from './sidebar.tsx';

function Layout() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '20px' }}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;