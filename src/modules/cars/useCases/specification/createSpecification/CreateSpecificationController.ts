import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createSpecificationUseCase = container.resolve(
            CreateSpecificationUseCase,
        );

        try {
            await createSpecificationUseCase.execute({ name, description });
        } catch (error) {
            return response.status(401).send({ error: error.message });
        }

        return response.status(201).send();
    }
}

export default CreateSpecificationController;
