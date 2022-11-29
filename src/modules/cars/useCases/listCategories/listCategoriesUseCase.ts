
import { Category } from "../../entities/Category";
import { ICategoriesRepository} from "../../repositories/ICategoriesRepository";




class ListCategoryUseCase{
    private categoriesRepository: ICategoriesRepository
    constructor(categoriesRepository:ICategoriesRepository){
        this.categoriesRepository = categoriesRepository;
    }
    execute():Category[]{

        return this.categoriesRepository.list()
        
    }
}

export { ListCategoryUseCase}