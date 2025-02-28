import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

export const signup = async (email,password) =>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, EmailAuthCredential,password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const login = async (email, password) =>{
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

export const logout = async () => {
    try{
        await signOut(auth);
    } catch (error) {
        throw error;
    }
};