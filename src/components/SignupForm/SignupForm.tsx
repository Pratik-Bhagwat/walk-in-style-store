import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import {
  useCreateUserAccount,
  useSignInAccount,
} from "@/react-query/queryAndMutation";
import { SignupSchema, signupSchema } from "@/schema";
import { toast } from "sonner";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const { checkAuthUser } = useUserContext();
  const navigate = useNavigate();

  const { mutateAsync: createUserAccount, isPending: isUserCreating } =
    useCreateUserAccount();

  const { mutateAsync: signInAccount } = useSignInAccount();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(values: SignupSchema) {
    const newUser = await createUserAccount(values);

    if (!newUser) return toast.error("Sign up failed. Please try again later");
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) return toast.error("Sign up failed. Please try again later");

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      navigate("/");
      reset();
    } else return toast.error("Sign up failed. Please try again later");

    return toast.success("Singup Successful!");
  }

  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <form className="flex flex-col gap-3">
        <div
          className={`flex flex-col border py-2 px-2 rounded-lg w-full select-none ${
            errors.name ? "border-red-500" : ""
          }`}
        >
          <label
            htmlFor="name"
            className="text-[0.6rem] uppercase font-semibold tracking-wide transition"
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
            className="outline-none border-none py-1 text-sm  placeholder:opacity-100"
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>
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
        <div
          className={`flex flex-col border py-2 px-2 rounded-lg w-full select-none ${
            errors.confirm_password ? "border-red-500" : ""
          }`}
        >
          <label
            htmlFor="confirm_password"
            className="text-[0.6rem] uppercase font-semibold tracking-wide transition"
          >
            confirm_password
          </label>
          <input
            {...register("confirm_password")}
            type="password"
            name="confirm_password"
            id="confirm_password"
            autoComplete="off"
            placeholder="Enter your confirm password"
            className="outline-none border-none py-1 text-sm  placeholder:opacity-100"
          />
          {errors.confirm_password && (
            <span className="text-red-500 text-xs">
              {errors.confirm_password.message}
            </span>
          )}
        </div>
        {/* signup btn div */}
        <Button
          type="submit"
          disabled={isUserCreating}
          className={`border text-center py-6 bg-black text-white rounded-md w-full flex items-center gap-3`}
        >
          {isUserCreating && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
