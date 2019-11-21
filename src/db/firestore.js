import { usersCollection, profilesCollection } from './collections';

export const registerNewUser = async (userData) => {

    const success = await usersCollection().doc(userData.uid).set(userData)
    .then(function() {
        console.log("User successfully written!");
        return true;
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
        return false;
    });

    return success;
}

export const registerNewProfile = async (id, profile) => {

    const success = await profilesCollection().doc(id).set(profile)
    .then(function() {
        console.log("Profile successfully written!");
        return true;
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
        return false;
    });

    return success;
}

export const userSignedIn = async (userId) => {
    const docRef = usersCollection().doc(userId);

    const userData = await docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            return doc.data();
        } else {
            console.log("No such document!");
            return doc.data();
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    return userData;
}

export const getUserProfile = async (userId) => {
    const docRef = profilesCollection().doc(userId);

    const profile = await docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            return doc.data();
        } else {
            console.log("No such document!");
            return doc.data();
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    return profile;
}

export const updateProfileHeader = async (profile) => {
    const docRef = usersCollection().doc(profile.uid);

    const userData = await docRef.update(profile)
    .then(function() {
        console.log("Document successfully updated!");
        return profile;
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });

    return userData;
}

export const updateProfileContent = async (uid, content) => {
    const docRef = profilesCollection().doc(uid);

    const data = await docRef.update(content)
    .then(function() {
        console.log("Document successfully updated!");
        return content;
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
        return null;
    });

    return data;
}
