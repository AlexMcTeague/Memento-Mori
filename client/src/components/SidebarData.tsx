import { House, List } from 'lucide-react';

// TODO: This could potentially be a dynamic list based on the pages/ folder
// Each page would have a title and icon property
export const SidebarData = [
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
]