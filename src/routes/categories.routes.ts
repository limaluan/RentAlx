import { Router } from "express";
import multer from "multer";

import CreateCategoryController from "../modules/cars/useCases/category/createCategory/CreateCategoryController";
import ImportCategoriesController from "../modules/cars/useCases/category/importCategories/ImportCategoriesController";
import ListCategoriesController from "../modules/cars/useCases/category/listCategories/ListCategoriesController";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoriesController.handle,
);

categoriesRoutes.get("/", listCategoriesController.handle);

export default categoriesRoutes;
