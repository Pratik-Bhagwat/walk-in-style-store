import { getCurrentUser } from "@/appwrite/api";
import { TAuthState, TInitialUser } from "@/types";
import { Models } from "appwrite";
import { useContext, createContext, useState, useEffect } from "react";

const INITIAL_USER: TInitialUser = {
  id: "",
  name: "",
  email: "",
  cart: [],
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  setUser: () => {},
  // currentUserDocumentId: "",
  // setCurrentUserDocumentId: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
  cart: [],
  setCart: () => {},
};

const AuthContext = createContext<TAuthState>(INITIAL_STATE);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(INITIAL_USER);
  // const [currentUserDocumentId, setCurrentUserDocumentId] = useState("");
  const [cart, setCart] = useState<Models.Document[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function checkAuthUser() {
    try {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        // const userDocumentId = await getDocumentId(currentUser.$id);
        setUser({
          id: currentUser.$id,
          name: currentUser.name,
          email: currentUser.email,
          cart: cart,
        });
        // setCurrentUserDocumentId(userDocumentId);
        setIsAuthenticated(true);
        return true;
      } else {
        setIsAuthenticated(false);
        return false;
      }
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
      return false;
    }
  }

  useEffect(() => {
    const checkUser = async () => {
      const cookieFallbackItem = localStorage.getItem("cookieFallback");
      if (cookieFallbackItem !== null) {
        const cookieFallback = JSON.parse(cookieFallbackItem);
        if (Array.isArray(cookieFallback) && cookieFallback.length === 0)
          setIsAuthenticated(false);
      }
      await checkAuthUser();
    };
    checkUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser,
        cart,
        setCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);
