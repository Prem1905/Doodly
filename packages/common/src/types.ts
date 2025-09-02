import { email, z } from "zod";

export const CreateUserSchema = z.object({
    username : z.string().min(2,"Use atleast 2 characters").max(10,"Username should not be more than 10 characters"),
    password : z.string(),
    name : z.string().min(2,"Use atleast 2 characters").max(10,"Username should not be more than 10 characters")
})

export const SignInSchema = z.object({
    username : z.string().min(2,"Use atleast 2 characters").max(10,"Username should not be more than 10 characters"),
    password : z.string(),
})

export const CreateRoomSchema = z.object({
    name : z.string().min(2,"Use atleast 2 characters").max(10,"Username should not be more than 10 characters")
})

