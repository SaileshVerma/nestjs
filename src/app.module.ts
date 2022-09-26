import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/item.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
//import {Eser} from 'src/database/models/eser.js'
@Module({
  imports: [ItemModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal:true,
    }),

GraphQLModule.forRoot<ApolloDriverConfig>({

  driver:ApolloDriver,
  typePaths:['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class',
  },
}),


    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DATABASE_HOST,
      port: 3000,
      username: process.env.DATABASE_USER,
      password: "postgresql",
      database: "learning",

      models: [
        // Eser,
      ],
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
