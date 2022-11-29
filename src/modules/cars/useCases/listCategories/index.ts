import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesControlller";
import { ListCategoryUseCase } from "./listCategoriesUseCase";


const categoriesRepository = null
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export{listCategoriesController};