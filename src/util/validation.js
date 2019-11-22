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

    dobMonth = parseInt(dobMonth) + 1;
    
    const dob = Date.parse(`${dobYear}-${dobMonth}-${dobDay}`);
    const timestamp = store.getState().db.firebase.firestore.Timestamp.fromMillis(dob);

    return {
        displayName,
        dob: !isNaN(dob) ? timestamp : null,
        location,
        gender     
    };
}

export const parseTimestamp = (dob) => {  
    return {
        dobMonth: dob ? dob.toDate().getUTCMonth() : "",
        dobDay: dob ? dob.toDate().getUTCDate() : "",
        dobYear: dob ? dob.toDate().getUTCFullYear() : ""
    }
}

export const setInputFilter = (textbox, inputFilter) => {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    });
  }