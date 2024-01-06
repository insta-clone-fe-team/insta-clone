import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase/firebase";

const useGetUserProfileByUserName = (userName = "hhh") => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", userName)
        );
        const querySnapshot = await getDocs(q);
        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        dispatch({ type: "ADD", payload: userDoc });
        console.log("userDoc", userDoc);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile();
  }, []);

  return data;
};

export default useGetUserProfileByUserName;
