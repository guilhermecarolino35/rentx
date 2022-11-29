
import { ICategoriesRepository} from "../../repositories/ICategoriesRepository";

interface IRequest{
    name:string;
    description:string;
}


class CreateCategoryUseCase{
    private categoriesRepository: ICategoriesRepository
    constructor(categoriesRepository:ICategoriesRepository){
        this.categoriesRepository = categoriesRepository;
    }
   async execute({name,description}:IRequest):Promise<void>{

        if( await this.categoriesRepository.findByName(name)){
            throw new Error("Category already Exists")
        }
        this.categoriesRepository.create({name,description})
    }
}

export { CreateCategoryUseCase}