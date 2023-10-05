import {
    Column,
    Entity,
} from "typeorm";
import { BaseEntity } from "./baseEntity.entity";

export enum Role {
    seller = "seller",
    buyer = "buyer",
}

@Entity("users")
class User extends BaseEntity {
    @Column({ type: "varchar", length: 255 })
    firstName: string;

    @Column({ type: "varchar", length: 255 })
    lastName: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    @Column({ type: "varchar", length: 11, unique: true })
    cpf: string;

    @Column({ type: "varchar", length: 14, unique: true })
    cellphone: string;

    @Column({ type: "date" })
    birthdate: Date;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "text", nullable: true })
    userImage: string | null | undefined;

    @Column({ type: "enum", enum: Role })
    role: string;
}