import { request, response, Router } from "express";

import createCategoryController  from "../modules/cars/useCases/createCategory/index"

import {listCategoriesController} from "../modules/cars/useCases/listCategories/index"

import multer from "multer";
import { ImportController } from "../modules/cars/useCases/importCategory";


const categoriesRoutes = Router();

const upload = multer({
    dest:"./tmp"
})

categoriesRoutes.post("/",(request,response) =>{
    console.log("fuck pool")
	return createCategoryController().handle(request,response)
});


categoriesRoutes.get("/",(request,response)=>{
    console.log("alo")
   return listCategoriesController.handle(request,response);
});


categoriesRoutes.post("/import",upload.single("file"),(request,response)=>{
   return  ImportController.handle(request,response);
})

export {categoriesRoutes};