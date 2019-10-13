import firebase from 'firebase/app';
//for db
import 'firebase/firestore';
//for authentication
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyD-6y_VEFEVFVA7cNUNlcsBc8k7m6veJFg",
    authDomain: "ecommerce-c2d89.firebaseapp.com",
    databaseURL: "https://ecommerce-c2d89.firebaseio.com",
    projectId: "ecommerce-c2d89",
    storageBucket: "ecommerce-c2d89.appspot.com",
    messagingSenderId: "1016274752318",
    appId: "1:1016274752318:web:3e641cf5f94e2760c0d26f",
    measurementId: "G-KVZJV84ZX3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    //getting user
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //getting user info
    const snapShot = await userRef.get();
    //if new info add info
    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('couldnt add user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

//google auth 
const provider = new firebase.auth.GoogleAuthProvider();
//trigger popup when we use google for sign in and auth
provider.setCustomParameters({ prompt: 'select_account'});
//using google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

