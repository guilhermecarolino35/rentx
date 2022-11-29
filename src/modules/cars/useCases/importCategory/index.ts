import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { importCategoryController } from "./ImportCategoryController";
import { ImportCatSegoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = null

const importCategoryUseCase = new ImportCatSegoryUseCase(categoriesRepository)

const ImportController = new importCategoryController(importCategoryUseCase);


export {ImportController}