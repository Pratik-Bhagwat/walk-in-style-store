import { Link } from "react-router-dom";
import successfullImage from "../assets/successfull image.jpg";
import { buttonVariants } from "./ui/button";

function Success() {
  return (
    <div className="select-none flex flex-col items-center justify-center h-screen">
      <h1 className="text-green-500 text-2xl">Order Placed Successfully!</h1>
      <p className="mt-4 text-center">
        Your order has been placed successfully and is now being processed. We
        will send you a confirmation email shortly.
      </p>
      <img src={successfullImage} alt="Success" className="w-64 h-60 mt-4" />
      <Link
        to="/"
        className={buttonVariants({
          variant: "link",
          className: "text-blue-400",
        })}
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default Success;
