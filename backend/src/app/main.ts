import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';

async function bootstrap() {
  const port = process.env['PORT'] ?? 3333;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  app.use(
    session({
      secret: process.env['SECRET'],
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`🚀 server started on http://localhost:${port}`);
}
bootstrap();
