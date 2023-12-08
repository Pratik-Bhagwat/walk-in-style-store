import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name should be atleast 2 Characters long" }),

    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password should be atleast 8 Characters long" }),

    confirm_password: z
      .string()
      .min(8, { message: "Password should be atleast 8 Characters long" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Password don't match",
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 Characters long" }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
