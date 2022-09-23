import {Controller,Post,Get} from '@nestjs/common';



@Controller('item')
export class ItemController{

@Get()
getData() :any {
    return "This is my item get route";
}

@Get()
getOnlyData(): any{
    return "This is for ambiguous routes";
}


}