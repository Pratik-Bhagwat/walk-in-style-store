import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="mt-[61px] bg-bg-image-blur bg-center h-screen flex items-center justify-center">
      <div className="relative container border rounded-xl bg-white p-6 w-[500px] select-none">
        {/* heading of the signup page */}
        <div className="flex flex-col gap-1 text-center mb-8">
          <h1 className="font-bold text-2xl">Welcome Back!</h1>
          <p className="font-light text-lg">To the WalkInStyle Store.</p>
        </div>

        {/* main form */}
        <LoginForm />

        {/* already have account div */}
        <div className="mt-8 mb-2 text-center">
          <p>
            Don't have an account?
            <Link to="/signup" className="text-blue-600">
              Signup now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
