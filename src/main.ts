import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const mainLogger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport : Transport.TCP,
      options : {
        host : 'localhost',
        port : 4100
      }
    }
  );
  app.listen(() => mainLogger.log('Data Monitoring Microservice is listening @ port 4100'))
}
bootstrap();
