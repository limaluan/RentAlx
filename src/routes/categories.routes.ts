import { Router } from "express";
import multer from "multer";
import createCategoryController from "../modules/cars/useCases/category/createCategory";
import importCategoriesController from "../modules/cars/useCases/category/importCategories";
import listCategoriesController from "../modules/cars/useCases/category/listCategories";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoriesController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

export default categoriesRoutes;
