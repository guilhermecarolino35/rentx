import { request, response, Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecifications";


listSpecificationController

const EspecificationRoutes = Router();


EspecificationRoutes.post("/",(request,response)=>{
    createSpecificationController.handle(request,response);
});

EspecificationRoutes.get("/",(request,response)=>{
    listSpecificationController.handle(request,response);
});

export {EspecificationRoutes};