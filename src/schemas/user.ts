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

export const userCreateSchema = z
  .object({
    name: z
      .string()
      .nonempty("campo obrigatório")
      .min(4)
      .regex(/^\S*$/, "não pode haver espaços em branco"),

    email: z
      .string()
      .nonempty("campo obrigatório")
      .regex(/^\S*$/, "não pode haver espaços em branco")
      .email("digite um e-mail válido"),

    password: z
      .string()
      .nonempty("campo obrigatório")
      .regex(/^\S*$/, "não pode haver espaços em branco")
      .regex(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .regex(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .regex(/(\d)/, "deve conter ao menos 1 número")
      .regex(/(\W)/, "deve conter ao menos 1 caracter especial")
      .min(8, "no mínimo 8 caracteres"),

    confirmPassword: z.string().nonempty("campo obrigatório"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Senhas não são iguais",
    path: ["confirmPassword"],
  });

export const userRecoverSchema = z
  .object({
    email: z
      .string()
      .nonempty("campo obrigatório")
      .regex(/^\S*$/, "não pode haver espaços em branco")
      .email("digite um e-mail válido"),

    newPassword: z
      .string()
      .nonempty("campo obrigatório")
      .regex(/^\S*$/, "não pode haver espaços em branco")
      .regex(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .regex(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .regex(/(\d)/, "deve conter ao menos 1 número")
      .regex(/(\W)/, "deve conter ao menos 1 caracter especial")
      .min(8, "no mínimo 8 caracteres"),

    confirmNewPassword: z.string().nonempty("campo obrigatório"),
  })
  .refine(
    ({ newPassword, confirmNewPassword }) => newPassword === confirmNewPassword,
    {
      message: "Senhas não são iguais",
      path: ["confirmNewPassword"],
    }
  );
