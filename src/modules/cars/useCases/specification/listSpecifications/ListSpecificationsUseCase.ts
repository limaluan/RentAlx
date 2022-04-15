import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository,
    ) {}

    async execute() {
        const allSpecifications = await this.specificationsRepository.list();
        return allSpecifications;
    }
}

export default ListSpecificationsUseCase;
