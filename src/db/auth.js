import { firebaseAuth } from './collections';

export const firebaseSignOut = async () => {
    const userStilledSignedIn = await firebaseAuth().signOut().then(function() {
        console.log("sign out successful");
        return false;
    }).catch(function(error) {
        console.log(error);
        return true;
    });

    return userStilledSignedIn;
}