import { inject, injectable } from "tsyringe";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const { email } = data;

        const emailAlreadyExists = await this.usersRepository.findByEmail(
            email,
        );

        if (emailAlreadyExists) {
            throw new Error("Email Already taken.");
        }

        await this.usersRepository.create(data);
    }
}

export default CreateUserUseCase;
