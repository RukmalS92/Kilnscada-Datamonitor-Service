import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('tempread')
  async getTemp(): Promise<any> {
    return await this.appService.getTemperatureData()
  }

  @MessagePattern('invread')
  async getInv() : Promise<any> {

  }
}
