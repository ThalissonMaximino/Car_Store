import { z } from "zod";
import schemas from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";


type TUser = z.infer<typeof schemas.userSchema>;

type TUserRequest = z.infer<typeof schemas.userRequestSchema>;

type TUserResponse = z.infer<typeof schemas.userResponseSchema>;

type TLogin = z.infer<typeof schemas.LoginSchema>;

type TUserWithoutAddress = z.infer<typeof schemas.userWithoutAddress>;

type TUserWithoutSales = z.infer<typeof schemas.userWithoutSales>;

type TUserEmailData = z.infer<typeof schemas.userEmailSchema>;

type TUserUdpateSchema = z.infer<typeof schemas.userUdpateSchema>;

type TUserUdpateRequest = DeepPartial<TUserRequest>

export {
    TUser,
    TUserRequest,
    TUserResponse,
    TLogin,
    TUserWithoutAddress,
    TUserWithoutSales,
    TUserEmailData,
    TUserUdpateSchema,
    TUserUdpateRequest
};
