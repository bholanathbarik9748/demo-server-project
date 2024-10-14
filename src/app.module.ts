import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://bb:Z60Ve02FmByfyPBv@crud.b8lah.mongodb.net/?retryWrites=true&w=majority&appName=Crud"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
