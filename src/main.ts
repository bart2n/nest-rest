import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigin = process.env.FRONTEND_URL ?? process.env.CORS_ORIGIN ?? 'http://localhost:5173';
  app.enableCors({ origin: allowedOrigin });
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Server listening on http://localhost:${port} (CORS allowed: ${allowedOrigin})`);
}
bootstrap();
