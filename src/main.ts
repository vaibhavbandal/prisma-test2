import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client'
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');  

  await app.listen(3000);  
  
 console.info('server started at 3000')
 
}  
     
  
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/vaibhavbandal/prisma-test.git
// git push -u origin main



bootstrap();
 