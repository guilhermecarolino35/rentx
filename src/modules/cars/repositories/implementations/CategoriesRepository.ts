import { Category } from "../../entities/Category";
import { AppdataSource } from "../../../../database/data-source";
import { ICategoriesRepository,ICreateCategoryDTO } from "../ICategoriesRepository";
import { Repository} from "typeorm"

class CategoriesRepository implements ICategoriesRepository {
    private repository:Repository<Category>
    
    private static INSTANCE:CategoriesRepository

    constructor(){
        this.repository = AppdataSource.getRepository(Category)
    }

    // public static getInstance():CategoriesRepository{
    //     if(!CategoriesRepository.INSTANCE){
    //         CategoriesRepository.INSTANCE = new CategoriesRepository()
    //     }
    //     return CategoriesRepository.INSTANCE
    // }
    async create({name,description}:ICreateCategoryDTO):Promise<void>{
        const category = this.repository.create({
            description,
            name
        })
        

        await this.repository.save(category)
    }

   async list(): Promise<Category[]> {
        const categories = await this.repository.find()
        return categories
    }
    async findByName(name:string):Promise<Category>{
        const nameAlreadyExists = await this.repository.findOneBy({name});
        return nameAlreadyExists
    }
}

export { CategoriesRepository}
