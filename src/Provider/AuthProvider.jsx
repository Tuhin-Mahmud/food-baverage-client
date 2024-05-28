// /* eslint-disable react/prop-types */
// import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import auth from "../firebase/firebase.config";

// export const AuthContext = createContext(null)


// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const googleProvider = new GoogleAuthProvider()



//     // google login
//     const signInGoogle = () => {
//         setLoading(true)
//         return signInWithPopup(auth, googleProvider)
//     }

//     // createUser
//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     // signInUser
//     const signIn = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)

//     }

//     // logOut
//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }



//     useEffect(() => {
//         const unSubsCribe = onAuthStateChanged(auth, currentUser => {
//             console.log('current user', currentUser);
//             setUser(currentUser)
//             setLoading(false)
//         })
//         return () => {
//             return unSubsCribe()
//         }
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         logOut,
//         signInGoogle

//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;