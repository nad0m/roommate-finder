import { users } from './collections';

export const addNewUser = (db, profile) => {

    db.collection(users).doc(profile.uid).set(profile)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

}

export const getUser = async (db, uid, handleResult) => {

    const docRef = db.collection(users).doc(uid);

    const result = await docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            return doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return doc.data();
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    console.log(result);

    handleResult(result ? false : true);
    return result;
}