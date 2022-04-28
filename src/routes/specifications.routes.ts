import { Router } from "express";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import CreateSpecificationController from "../modules/cars/useCases/specification/createSpecification/CreateSpecificationController";
import ListSpecificationsController from "../modules/cars/useCases/specification/listSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationsController.handle);

export default specificationsRoutes;
