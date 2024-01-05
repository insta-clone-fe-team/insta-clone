import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useAuthStore from "../redux/store/authStore";

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      logoutUser();
    } catch (error) {
      console.log(error);
    }
  };
  return { handleLogout, isLoggingOut, error };
};

export default useLogout;
