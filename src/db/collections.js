import store from '../store';

export const usersCollection = () => {
    return store.getState().db.firebase.firestore().collection("users");
}

