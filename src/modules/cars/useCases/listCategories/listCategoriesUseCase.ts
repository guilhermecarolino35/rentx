import { inject,injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoriesRepository} from "../../repositories/ICategoriesRepository";



@injectable()
class ListCategoryUseCase{
    private categoriesRepository: ICategoriesRepository
    constructor(@inject("CategoriesRepository")categoriesRepository:ICategoriesRepository){
        this.categoriesRepository = categoriesRepository;
    }
    async execute():Promise<Category[]>{
        
        return await this.categoriesRepository.list()
        
    }
}

export { ListCategoryUseCase}