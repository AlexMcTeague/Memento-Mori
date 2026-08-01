import { Outlet } from 'react-router';
import Sidebar from './Sidebar.tsx';

function Layout() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '20px', marginTop: '80px' }}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;