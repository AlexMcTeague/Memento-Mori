import { useState } from 'react';
import { Link } from 'react-router';
import { House, List, Menu, X } from 'lucide-react';
import '../css/sidebar.css';

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: House,
        cName: 'nav-text'
    },
    {
        title: 'List',
        path: '/list',
        icon: List,
        cName: 'nav-text'
    }
];

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="sidebar">
                <Link to="#" className="menu-bars">
                    <Menu onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <X />
                        </Link>
                    </li>
                    { SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;