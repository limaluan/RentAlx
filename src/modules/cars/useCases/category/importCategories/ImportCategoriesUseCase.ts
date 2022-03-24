class ImportCategoriesUseCase {
    // eslint-disable-next-line class-methods-use-this
    execute(file: Express.Multer.File): void {
        console.log(file);
    }
}

export default ImportCategoriesUseCase;
