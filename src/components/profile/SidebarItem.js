import React from 'react';
import SidebarButton from './SidebarButton';

const SidebarItem = ({ title, content }) => {

    return (
        <React.Fragment>
            <SidebarButton type="header" text={title.text} checked={checkHeader(content)} />
            <ul>
                {content.map(item => {
                    return (
                        <li key={item.text}>
                            <SidebarButton type="normal" text={item.text} checked={item.checked}/>
                        </li>
                    ); 
                })}
            </ul>
            <hr></hr>
        </React.Fragment>
    );
}

const checkHeader = (items) => {
    const filtered = items.filter(item => {
        return item.checked === false;
    });

    return filtered.length === 0;
}

export default SidebarItem;