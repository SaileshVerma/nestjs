import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000,()=>{
    console.log(process.env.DATABASE_USER);
    console.log("listening at the port : http://localhost:3000")
  });
}
bootstrap();
