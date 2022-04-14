import { Router } from "express";
import multer from "multer";

import CreateCategoryController from "../modules/cars/useCases/category/createCategory/CreateCategoryController";
import importCategoriesController from "../modules/cars/useCases/category/importCategories";
import listCategoriesController from "../modules/cars/useCases/category/listCategories";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoriesController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

export default categoriesRoutes;
