import React from 'react';
import Check from '../../images/Check';

const SidebarButton = ({ type, text, checked }) => {

    switch (type) {
        case 'header':
            return (
                <button className="button-item">
                    <h5>
                        {checked ? <Check /> : ""}
                        {text}
                    </h5>
                </button>
            );
        default:
            return (
                <button className="button-item gray">
                        {checked ? <Check /> : ""}
                        {text}
                </button>
            );
    }
}

export default SidebarButton;