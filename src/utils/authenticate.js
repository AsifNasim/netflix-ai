import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile} from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "./userSlice";

export const createUser = (name, email, password, dispatch) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        console.log("User credentials -->", userCredential)
        
        const user = userCredential.user;
        console.log("Username -->", user);
        updateProfile(user, {
            displayName: name
        }).then(() => {
            console.log("User updated -->", user);
            // Dispatch action to update user slice
            const { uid, email, displayName} = auth.currentUser;
            dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
            }));
        }).catch((error) => {
            console.log("Error updating user -->", error)
        })
        
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log("error code --> ", errorCode);
        const errorMessage = error.message;
        console.log("error Message --> ", errorMessage)
    });
}

export const loginUser = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Login User object-->", user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " - " + errorMessage)
        return errorCode + " - " + errorMessage;
    });
}

