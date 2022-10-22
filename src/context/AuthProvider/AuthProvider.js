import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [loader, setLoader] = useState(true);

  // 1 Login with Google
  const providerLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // 2 Hold the user and store setUser state
  useEffect(() => {
    const unsubcrib = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }

      setLoader(false);
    });
    return () => unsubcrib();
  }, []);

  // 3 Log out the Website
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // 4 LoginCreateUser with email and password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 5 Update user name and photo
  const updateNameAndPhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // 7 Sen an email for Email Verification
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // 7 Login with email and password
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUser,
    providerLogin,
    updateNameAndPhoto,
    verifyEmail,
    setLoader,
    loader,
    logOut,
    login,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
