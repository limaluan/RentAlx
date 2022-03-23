import { Router } from "express";
import CategoriesRepository from "../modules/cars/repositories/CategoriesRepository";
import createCategoryController from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    const allCategories = categories.list();
    return response.json(allCategories);
});

export default categoriesRoutes;
