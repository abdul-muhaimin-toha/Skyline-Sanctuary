import { useState } from "react";
import AuthContext from "./AuthContext";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const emailPassLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const authValue = { emailPassLogin, googleLogin, githubLogin };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
