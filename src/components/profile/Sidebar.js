import React from 'react';
import SidebarItem from './SidebarItem';
import '../profile/sidebar.css';

import data from '../../util/sidebar-mock';

const Sidebar = () => {

    return (
        <div className="sidebar-container">
            <ul>
                
                {
                    data.map(item => {
                        return (
                            <SidebarItem title={item.title} content={item.content} key={item.title.text} />
                        );
                    })
                }
                
            </ul>
        </div>
    );
}

export default Sidebar;