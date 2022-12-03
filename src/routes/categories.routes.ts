import { request, response, Router } from "express";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

import {ListCategoriesController} from "../modules/cars/useCases/listCategories/listCategoriesControlller"

import multer from "multer";
import { importCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";


const categoriesRoutes = Router();

const upload = multer({
    dest:"./tmp"
})

const createCategoryController = new CreateCategoryController()
const  ImportCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()


categoriesRoutes.post("/",createCategoryController.handle);


categoriesRoutes.get("/",listCategoriesController.handle);


categoriesRoutes.post("/import",upload.single("file"),ImportCategoryController.handle)

export {categoriesRoutes};