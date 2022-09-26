import {Controller,Post,Get} from '@nestjs/common';



@Controller()
export class ItemController{

@Get()
getData() :any {
    console.log(process.env.DATABASE_USER);
    return "This is my item get route";
}

@Get()
getOnlyData(): any{
    return "This is for ambiguous routes";
}


}