import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import UsersRepository from "../modules/account/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export default async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeaders.split(" ");

    try {
        const { sub: userId } = verify(
            token,
            "ff99a9c6c14cc4804acf3539018d7a30",
        ) as IPayload;

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(userId);

        if (!user) {
            throw new AppError("User does not exists", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid Token", 401);
    }
}
