import  { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { EspecificationRoutes } from "./Specification.routes";


const router = Router();

router.use("/categories",categoriesRoutes)
router.use("/especifications",EspecificationRoutes)


export{router}