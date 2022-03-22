import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../repositories/ICategoriesRepository";

class CreateCategoryService {
    constructor(private categoryRepositories: ICategoriesRepository) {}

    execute({ name, description }: ICreateCategoryDTO): void {
        const categoryAlreadyExists =
            this.categoryRepositories.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        return this.categoryRepositories.create({ name, description });
    }
}

export default CreateCategoryService;
