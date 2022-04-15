import { Request, Response } from "express";
import { container } from "tsyringe";
import ListSpecificationUseCase from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationUseCase = container.resolve(
            ListSpecificationUseCase,
        );

        const allSpecifications = await listSpecificationUseCase.execute();
        return response.json(allSpecifications);
    }
}

export default ListSpecificationsController;
