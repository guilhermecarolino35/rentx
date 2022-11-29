
import { Request,Response } from "express";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCases";

class ListSpecificationsController{
    private listSpecificationUseCases:ListSpecificationsUseCase
    constructor(listSpecificationUseCases:ListSpecificationsUseCase){
        this.listSpecificationUseCases = listSpecificationUseCases;
    }
    handle(request:Request,response:Response):Response{
        return response.json(this.listSpecificationUseCases.execute())
    }
}

export {ListSpecificationsController}