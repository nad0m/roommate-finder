import store from '../store';

const validDisplayName = (displayName) => {
    return displayName.length > 0;
}

const validDOB = (day, month, year) => {
    if (day.length + month.length + year.length === 0)
        return true;
    
    return !isNaN(Date.parse(`${year}-${month}-${day}`));
}

export const validProfile = ({displayName, dobDay, dobMonth, dobYear}) => {
    const errors = [];

    if (!validDisplayName(displayName)) {
        errors.push('displayName');
    }

    if (!validDOB(dobDay, dobMonth, dobYear)) {
        errors.push('dob');
    }

    return errors;
}

export const parseProfile = ({displayName, dobDay, dobMonth, dobYear, location, gender}) => {
    
    const dob = Date.parse(`${dobYear}-${dobMonth}-${dobDay}`);
    const timestamp = store.getState().db.firebase.firestore.Timestamp.fromMillis(dob);

    return {
        displayName,
        dob: !isNaN(dob) ? timestamp : null,
        location,
        gender     
    };
}