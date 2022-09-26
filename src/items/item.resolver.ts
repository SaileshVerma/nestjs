import { Resolver ,Query} from "@nestjs/graphql";
// import { Query } from "typeorm/driver/Query";
import { ItemService } from "./item.service";

@Resolver()
export class ItemResolver{
constructor(private readonly  itemService:ItemService){}


@Query('getData')
getData(){
    const ls=this.itemService.getItemData
   
}

@Query('print')
print(){
    return "Hellow OWrl"
}

}


