
export const validDOB = (month, day, year) => {
    return !isNaN(`${year}-${month}-${day}`);
}

export const dateToString = (date) => {
    const month = date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
}