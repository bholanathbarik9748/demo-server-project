import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.connect(
    'mongodb+srv://bholanathbarik9748:jYDTtkIJSIm6VogG@cluster0.gqcdgqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  );

  await app.listen(3000);
}
bootstrap();
