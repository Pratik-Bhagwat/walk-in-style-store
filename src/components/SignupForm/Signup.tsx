import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="mt-[61px] bg-bg-image-blur bg-center h-screen flex items-center justify-center">
      <div className="relative container border rounded-xl bg-white p-6 w-[500px] select-none">
        {/* heading of the signup page */}
        <div className="flex flex-col gap-1 text-center mb-8">
          <h1 className="font-bold text-2xl">Welcome!</h1>
          <p className="font-light text-lg">To the WalkInStyle Store.</p>
        </div>

        {/* main form */}
        <SignupForm />

        {/* already have account div */}
        <div className="mt-8 mb-2 text-center">
          <p>
            Already have an account?
            <Link to="/login" className="text-blue-600">
              Login now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
