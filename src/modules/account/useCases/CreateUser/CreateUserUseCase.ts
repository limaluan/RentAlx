import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const emailAlreadyExists = await this.usersRepository.findByEmail(
            data.email,
        );

        if (emailAlreadyExists) {
            throw new AppError("Email Already taken.");
        }

        Object.assign(data, {
            password: await hash(data.password, 8),
        });

        await this.usersRepository.create(data);
    }
}

export default CreateUserUseCase;
