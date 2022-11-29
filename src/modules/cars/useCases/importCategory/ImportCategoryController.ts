import { Request,Response } from "express"
import { ImportCatSegoryUseCase } from "./ImportCategoryUseCase";


class importCategoryController {
    private importCategoryUseCase:ImportCatSegoryUseCase
    constructor(importCategoryUseCase:ImportCatSegoryUseCase){
        this.importCategoryUseCase = importCategoryUseCase;
    }

    handle(request:Request,response:Response):Response{
        const{file} = request;
        this.importCategoryUseCase.execute(file);
        return response.send()
    }


}


export{importCategoryController}