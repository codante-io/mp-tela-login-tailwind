import * as z from "zod";

export const userLoginSchema = z.object({
  email: z
    .string()
    .nonempty("campo obrigatório")
    .email("digite um e-mail válido")
    .regex(/^\S*$/, "não pode haver espaços em branco"),

  password: z
    .string()
    .nonempty("campo obrigatório")
    .regex(/^\S*$/, "não pode haver espaços em branco"),
});
