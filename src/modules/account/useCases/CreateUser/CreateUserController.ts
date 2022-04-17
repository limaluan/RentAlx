import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserUseCase from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        try {
            await createUserUseCase.execute(data);
        } catch (error) {
            return response.status(401).send({ error: error.message });
        }

        return response.status(201).send();
    }
}

export default CreateUserController;
