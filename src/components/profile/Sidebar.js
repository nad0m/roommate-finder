import React from 'react';
import SidebarItem from './SidebarItem';
import '../profile/sidebar.css';

import { sidebarData } from '../../util/static-data';

const Sidebar = () => {

    return (
        <div className="sidebar-container">
            <ul>
                
                {
                    sidebarData.map(item => {
                        return (
                            <SidebarItem 
                                title={item.title} 
                                content={item.content} 
                                key={item.title.text} 
                            />
                        );
                    })
                }
                
            </ul>
        </div>
    );
}

export default Sidebar;