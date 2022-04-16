import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

        try {
            await createCategoryUseCase.execute({ name, description });
        } catch (error) {
            return response.status(401).send({ error: error.message });
        }

        return response.status(201).send();
    }
}

export default CreateCategoryController;
