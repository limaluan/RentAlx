import { inject, injectable } from "tsyringe";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../../../repositories/ICategoriesRepository";

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepositories: ICategoriesRepository,
    ) {}

    async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
        const categoryAlreadyExists =
            await this.categoryRepositories.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        return this.categoryRepositories.create({ name, description });
    }
}

export default CreateCategoryUseCase;
