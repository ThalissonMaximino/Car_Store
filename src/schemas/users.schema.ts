import {z} from "zod"

const userSchema = z.object({
    id: z.string(),
    firstName: z.string().max(255),
    lastName: z.string().max(255),
    email: z.string().email().max(255),
    password: z.string().max(255),
    cpf: z.string().max(11),
    cellphone: z.string().max(14),
    birthdate: z.union([z.date(), z.string()]),
    description: z.string(),
    userImage: z.string().nullish(),
    role: z.enum(["seller", "buyer"]).or(z.string()),
    created_at: z.string(),
    // address: addresses.addressRequestSchema,
    // sales: z.optional(salesAd.responseArray),
});

const userRequestSchema = userSchema.omit({
    id: true,
    created_at: true,
    sales: true,
});

const userResponseSchema = userSchema.omit({
    password: true,
});

const LoginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

const userEmailSchema = LoginSchema.pick({
    email: true,
});

const userWithoutAddress = userSchema.omit({ address: true, password: true });

// const userWithoutSales = userResponseSchema.omit({ sales: true });

// const userWithoutSalesAndAddress = userResponseSchema.omit({
//     sales: true,
//     address: true,
// });

const userUdpateSchema = userRequestSchema.partial();

const users = {
    userSchema,
    userRequestSchema,
    userResponseSchema,
    LoginSchema,
    userWithoutAddress,
    // userWithoutSales,
    userEmailSchema,
    userUdpateSchema,
    // userWithoutSalesAndAddress,
};

export default users;
