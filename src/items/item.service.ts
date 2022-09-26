import {Injectable} from '@nestjs/common';




@Injectable()

export class ItemService{
    private itemData=["data ", "data 2","data 3"];

   createItem( item:string){
     this.itemData.push(item);
   }

   getItemData(){
return [...this.itemData];
   }


}