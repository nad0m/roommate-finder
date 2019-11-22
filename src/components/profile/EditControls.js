import React from 'react';

const EditControls = ( { editting, cancel, save, saving, type }) => {

    if (editting) {
        return (
            <footer>
                <button className={disableCancel(saving)} onClick={() => cancel(type)}>
                    Cancel
                </button>

                <button className="button-item save" onClick={save}>
                    Save changes
                </button>
            </footer>
        );
    }

    return null;
}

const disableCancel = (saving) => {
    return saving ? "button-item ui button disabled" : "button-item";
}

export default EditControls;