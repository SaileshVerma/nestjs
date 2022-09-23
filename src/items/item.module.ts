import { Module ,MiddlewareConsumer } from "@nestjs/common";
import { ItemController } from "./item.controller";
import { ItemMiddleware } from "./item.middleware";
import { ItemService } from "./item.service";


@Module({
controllers:[ItemController],
providers:[ItemService],
})

export class ItemModule{
configure(consumer: MiddlewareConsumer){
    consumer.apply(ItemMiddleware).forRoutes('item','get');
}

}