import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot()

process.env.DB_URL

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://donadams50:mathematics@ahiajara.szq4a.mongodb.net/nestjs-graphql?retryWrites=true&w=majority'),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),

    AuthorModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
