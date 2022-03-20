import CategoriesRepository from "../repositories/CategoriesRepository";

interface ICreateCategory {
    name: string;
    description: string;
}

class CreateCategoryService {
    // eslint-disable-next-line no-useless-constructor
    constructor(private categoryRepositories: CategoriesRepository) {}

    execute({ name, description }: ICreateCategory): void {
        const categoryAlreadyExists =
            this.categoryRepositories.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        return this.categoryRepositories.create({ name, description });
    }
}

export default CreateCategoryService;
