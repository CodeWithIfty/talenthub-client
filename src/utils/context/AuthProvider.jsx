import { createContext, useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";
import PropTypes from "prop-types";
import useAxios from "../hooks/useAxios";

export const authContext = createContext();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const axios = useAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const SignOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const SignInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      // Use setTimeout to set loading to false after 2 seconds
      const userEmail = currenUser?.email || user?.email;
      console.log(userEmail);
      if (currenUser) {
        axios.post("/auth/access-token", { userEmail }).then((res) => {
          console.log(res);
        });
      } else {
        axios
          .post("/logout", { userEmail })
          .then((response) => {
            console.log(response);
            SignOutUser();
            console.log("working here");
          })
          .catch((error) => console.log(error));
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setUser(currenUser);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  // console.log(user);

  const authInfo = {
    user,
    createUser,
    SignInUser,
    SignOutUser,
    loading,
    setLoading,
    SignInWithGoogle,
    updateUserProfile,
    auth,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
