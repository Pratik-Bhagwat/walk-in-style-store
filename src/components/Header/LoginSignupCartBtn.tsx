// Importing necessary components and icons
import { LogOut, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import { useLogout } from "@/react-query/queryAndMutation";
import { buttonVariants } from "../ui/button";

// LoginSignupCartBtn component
function LoginSignupCartBtn() {
  // Using context to get user authentication status and user details
  const { isAuthenticated, user } = useUserContext();
  // Using react-query to handle logout
  const { mutateAsync: logout } = useLogout();

  // Function to generate avatar name from user name
  function generateAvatarName() {
    const name = user?.name.split(" ");
    if (name.length === 1) {
      return `${name[0].charAt(0).toUpperCase()}${name[0]
        .charAt(name[0].length - 1)
        .toUpperCase()}`;
    } else if (name.length > 1) {
      return `${name[0].charAt(0)}${name[name.length - 1]
        .charAt(name[name.length - 1].length - 1)
        .toUpperCase()}`;
    }
  }

  // Function to handle logout
  async function handleLogout() {
    await logout();
  }

  // Component return
  return (
    <div className="hidden lg:flex items-center gap-8">
      {/* Cart button with item count */}
      <Link to="/cart">
        <div className="flex items-center gap-1">
          <div className="rounded-2xl hover:bg-black/10 h-8 w-8 flex items-center justify-center">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <span>{user.cart.length}</span>
        </div>
      </Link>
      {/* Conditional rendering based on authentication status */}
      {!isAuthenticated ? (
        <div className="flex items-center gap-2">
          {/* Login and Signup buttons */}
          <Link to="/login" className={buttonVariants({ variant: "ghost" })}>
            Login
          </Link>
          <Link to="/signup" className={buttonVariants({ variant: "ghost" })}>
            Signup
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          {/* User avatar and logout button */}
          <div className="border rounded-full py-2 px-3">
            {generateAvatarName()}
          </div>
          <button onClick={handleLogout}>
            <LogOut size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

// Exporting the LoginSignupCartBtn component
export default LoginSignupCartBtn;
