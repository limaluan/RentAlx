import { Router } from "express";
import CategoriesRepositories from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categories = new CategoriesRepositories();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    categories.create({ name, description });

    response.status(201).send();
});

export default categoriesRoutes;
