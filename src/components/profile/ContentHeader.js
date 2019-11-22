import React from 'react';

const ContentHeader = ({ title, disabledStyle, onEditClick }) => {

    return (
        <div className="edit-header">
            <h3>{title}</h3>
            <button className={disabledStyle} onClick={onEditClick}>
                <i className="pencil icon"></i>
            </button>
        </div>
    );
}

export default ContentHeader;