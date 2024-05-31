import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Prueba Master')
  .setDescription('Objetivo de la prueba: Evaluar tus habilidades en Backend')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
