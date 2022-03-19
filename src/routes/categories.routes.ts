import { Router } from "express";
import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categories.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already Exists" });
    }

    categories.create({ name, description });
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const allCategories = categories.list();
    return response.json(allCategories);
});

export default categoriesRoutes;
