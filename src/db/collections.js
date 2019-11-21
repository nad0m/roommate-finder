import store from '../store';

export const usersCollection = () => {
    return store.getState().db.firebase.firestore().collection("users");
}

export const profilesCollection = () => {
    return store.getState().db.firebase.firestore().collection("profiles");
}

export const firebaseAuth = () => {
    return store.getState().db.firebase.auth();
}

