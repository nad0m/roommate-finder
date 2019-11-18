import { usersCollection } from './collections';

export const registerNewUser = (profile) => {

    usersCollection().doc(profile.uid).set(profile)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

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

export const updateProfileHeader = (profile) => {
    const washingtonRef = usersCollection.doc("DC");

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        capital: true
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}
