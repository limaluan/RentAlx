import fs from "fs";
import { parse } from "csv-parse";

class ImportCategoriesUseCase {
    // eslint-disable-next-line class-methods-use-this
    execute(file: Express.Multer.File) {
        const stream = fs.createReadStream(file.path);

        const parseFile = parse();

        stream.pipe(parseFile); // Joga a steam dentro do parseFile que por sua vez converte o arquivo csv

        parseFile.on("data", async line => {
            // Fica atualizando de acordo com a leitura de novos dados do parseFile
            console.log(line);
        });
    }
}

export default ImportCategoriesUseCase;
