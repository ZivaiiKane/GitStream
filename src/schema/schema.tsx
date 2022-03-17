import { z } from 'zod';

export const signupUser = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export const loginUser = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type signupUserType = z.infer<typeof signupUser>;
export type loginUserType = z.infer<typeof loginUser>;
