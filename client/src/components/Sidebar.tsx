import {useState} from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

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
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <X />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;