import React from 'react';

const EditControls = ( { editting, cancel, saveClick }) => {

    if (editting) {
        return (
            <footer>
                <button className="button-item" onClick={cancel}>
                    Cancel
                </button>

                <button className="button-item save">
                    Save changes
                </button>
            </footer>
        );
    }

    return null;
}

export default EditControls;