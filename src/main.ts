import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const env = require('ckey') // ckey is used here to access .env file.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(env.APP_PORT);
  console.log('🚀 App started.');
}
bootstrap();
