import { Request,Response } from "express"
import { container } from "tsyringe";
import { ImportCatSegoryUseCase } from "./ImportCategoryUseCase";


class importCategoryController {
    

    async handle(request:Request,response:Response):Promise<Response>{
        const{file} = request;
        const importCategoryUseCase = container.resolve(ImportCatSegoryUseCase)
        await importCategoryUseCase.execute(file);
        return response.send()
    }


}


export{importCategoryController}