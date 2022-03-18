import { Router } from "express";
import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    categories.create({ name, description });
    response.status(201).send();
});

export default categoriesRoutes;
