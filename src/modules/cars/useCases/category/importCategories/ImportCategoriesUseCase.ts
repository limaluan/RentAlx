import fs from "fs";
import { parse } from "csv-parse";
import CategoriesRepository from "../../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    // eslint-disable-next-line class-methods-use-this
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];

            const stream = fs.createReadStream(file.path);
            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async line => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    resolve(categories);
                })
                .on("error", err => {
                    reject(err);
                });
        });
    }

    // eslint-disable-next-line class-methods-use-this
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async category => {
            const { name, description } = category;

            const alreadyExists = this.categoriesRepository.findByName(name);

            if (!alreadyExists) {
                this.categoriesRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export default ImportCategoriesUseCase;
