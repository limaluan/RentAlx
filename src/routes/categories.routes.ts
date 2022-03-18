import { Router } from "express";
import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    categories.create({ name, description });
    response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const allCategories = categories.list();
    return response.json(allCategories);
});

export default categoriesRoutes;
