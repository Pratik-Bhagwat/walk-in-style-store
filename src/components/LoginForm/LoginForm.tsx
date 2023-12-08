// Importing necessary components and libraries
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useSignInAccount } from "@/react-query/queryAndMutation";
import { LoginSchema, loginSchema } from "@/schema";
import { toast } from "sonner";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

// LoginForm component
function LoginForm() {
  // Using context to get user authentication status and user details
  const { checkAuthUser } = useUserContext();
  const navigate = useNavigate();

  // Using react-query to handle logout
  const { mutateAsync: signInAccount } = useSignInAccount();

  // Using react-hook-form for form handling
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  // Function to handle form submission
  async function onSubmit(values: LoginSchema) {
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) return toast("Sign up failed. Please try again later");

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      reset();
      navigate("/");
      return toast.success("Login Successfull");
    } else return toast("Login failed. Please try again later");
  }

  // Component return
  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <form className="flex flex-col gap-3">
        {/* Email input field */}
        <div
          className={`flex flex-col border py-2 px-2 rounded-lg w-full select-none ${
            errors.email ? "border-red-500" : ""
          }}`}
        >
          <label
            htmlFor="email"
            className="text-[0.6rem] uppercase font-semibold tracking-wide transition"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email"
            className="outline-none border-none py-1 text-sm  placeholder:opacity-100"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
        {/* Password input field */}
        <div
          className={`flex flex-col border py-2 px-2 rounded-lg w-full select-none ${
            errors.password ? "border-red-500" : ""
          }`}
        >
          <label
            htmlFor="password"
            className="text-[0.6rem] uppercase font-semibold tracking-wide transition"
          >
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your password"
            className="outline-none border-none py-1 text-sm  placeholder:opacity-100"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Login button */}
        <Button
          type="submit"
          className={`border text-center py-6 bg-black text-white rounded-md w-full flex items-center gap-3`}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

// Exporting the LoginForm component
export default LoginForm;
