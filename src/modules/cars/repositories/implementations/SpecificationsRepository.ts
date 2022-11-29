
import { Specification } from "../../entities/Specification";
import {ISpecificationsRepository,ICreateSpecificationDTO } from "../ISpecificationsRepository"

class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[];
    private static INSTANCE:SpecificationRepository;

    constructor(){
        this.specifications = [];
    }
    
    public static getInstance():SpecificationRepository{
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository()
        }
        return SpecificationRepository.INSTANCE
    }
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        Object.assign(specification,{
            name,
            description,
            created_at:new Date()
        });
        this.specifications.push(specification)
    }
    list(): Specification[] {
        return this.specifications;
        
    }
    findByName(name: string): Specification {
       const NameAlreadyExists = this.specifications.find((speci)=>{
           return speci.name === name;
        })
        return NameAlreadyExists;
    }

    

}

export{SpecificationRepository};