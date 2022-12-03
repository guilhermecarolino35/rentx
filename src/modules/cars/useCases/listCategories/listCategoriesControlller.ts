import {Request,Response}  from "express"
import { ListCategoryUseCase } from "./listCategoriesUseCase";
import {container} from "tsyringe"

class ListCategoriesController{

    

    async handle(request:Request,response:Response):Promise<Response>{
        const listCategoryUseCase = container.resolve(ListCategoryUseCase)
        const list = await listCategoryUseCase.execute()
        return response.json(list)
    }
}

export{ ListCategoriesController}