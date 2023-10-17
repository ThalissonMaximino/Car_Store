import { z } from "zod";

const schema = z.object({
    email: z.string().email("Deve ser um e-mail válido"),
    password: z.string().min(1,{message: "Deve conter uma senha"}),
});

export type TLoginData = z.infer<typeof schema>;

export default schema;