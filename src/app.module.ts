import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { HttpModule } from '@nestjs/common/http';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
