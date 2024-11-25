import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configClassValidator, configCors, configSwagger } from './core/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configCors(app);
  configSwagger({
    app,
    config: {
      url: "localhost:5000/swagger"
    }
  })

  configClassValidator(app)

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
