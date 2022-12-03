import { request, response, Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/CreateSpecification/CreateSpecificationController";

CreateSpecificationController
const EspecificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

EspecificationRoutes.post("/",createSpecificationController.handle);

export {EspecificationRoutes};