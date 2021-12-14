import "../firebase";

import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //signUp function
  async function signUp(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    //update profile
    updateProfile(auth.currentUser, { displayName: username });
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  //loginFunction

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  //logOut function
  function logOut() {
    const auth = getAuth();
    return signOut(auth);
  }
  const value = {
    currentUser,
    signUp,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
