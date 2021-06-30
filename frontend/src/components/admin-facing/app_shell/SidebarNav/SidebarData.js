import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import DescriptionIcon from '@material-ui/icons/Description';



export const SidebarData = [
    {
        title: 'Home',
        titleStyle: { flex: '70%' },
        path: '/admin',
        icon: <HomeIcon style={{ flex: '30%', display: 'grid', placeItems: 'center' }}/>,
    },
    {
        title: 'Content',
        path: '#',
        icon: <DescriptionIcon />,
        class: {
 
        }
    },
    {
        title: 'Tools',
        path: '#',
        icon: <HomeIcon />,
        class: {
 
        }
    }
]