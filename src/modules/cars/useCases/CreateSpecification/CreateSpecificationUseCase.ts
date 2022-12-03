import { inject,injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    name:string;
    description:string;
}

@injectable()
class CreateSpecificationUseCase{
    private specificationsRepository:ISpecificationsRepository

    constructor(@inject("SpecificationsRepository")specificationsRepository:ISpecificationsRepository){
        this.specificationsRepository = specificationsRepository;
    }
    execute({ name, description }:IRequest):void{
       if(this.specificationsRepository.findByName(name)){
            throw new Error("Specification already exists")
       }
       
        this.specificationsRepository.create({ name,description })
       
    }

}

export{CreateSpecificationUseCase}