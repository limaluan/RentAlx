import { Request, Response } from "express";

import ImportCategoriesUseCase from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

    // eslint-disable-next-line class-methods-use-this
    handle(request: Request, response: Response) {
        const { file } = request;

        this.importCategoriesUseCase.execute(file);

        return response.send();
    }
}

export default ImportCategoriesController;
