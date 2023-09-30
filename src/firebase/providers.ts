// @ts-nocheck
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

export interface ICredentials {
    email: string;
    password: string;
}

export const loginWithEmailAndPassword = async ({ email, password }: ICredentials) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { displayName, photoURL, uid } = resp.user
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
            token: resp._tokenResponse.idToken
        }
    } catch (error: any) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }

}

export const logOutFirebase = async () => {
    return await FirebaseAuth.signOut()
}