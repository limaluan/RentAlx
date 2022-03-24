import { Request, Response } from "express";
import ListSpecificationUseCase from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

    handle(request: Request, response: Response): Response {
        const allSpecifications = this.listSpecificationUseCase.execute();
        return response.json(allSpecifications);
    }
}

export default ListSpecificationsController;
