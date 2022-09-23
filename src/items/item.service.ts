import {Injectable} from '@nestjs/common';




@Injectable()

export class ItemService{
    private itemData=[];

   createItem( item:String){
     this.itemData.push(item);
   }

   getItemData(): string[]{
return [...this.itemData];
   }


}