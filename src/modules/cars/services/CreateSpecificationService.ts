import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../repositories/ISpecificationsRepository";

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationsRepository) {}

    execute({ name, description }: ICreateSpecificationDTO): void {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Already Exists");
        }

        return this.specificationRepository.create({ name, description });
    }
}

export default CreateSpecificationService;
