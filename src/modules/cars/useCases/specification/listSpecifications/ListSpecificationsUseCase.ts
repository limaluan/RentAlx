import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute() {
        const allCategories = this.specificationsRepository.list();
        return allCategories;
    }
}

export default ListSpecificationsUseCase;
