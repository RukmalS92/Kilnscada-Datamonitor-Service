import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';
import { throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable()
export class AppService {
  private tempEPURL = "http://localhost:3100/temp";
  private invEPURL = "http://localhost:3100/inv";

  private appserviceLogger = new Logger('AppServiceLogger')

  constructor(private readonly httpservice : HttpService){}

  getTemperatureData() : Promise<any> {
    this.appserviceLogger.log("getting Temperature data...")
    return this.httpservice.get(this.tempEPURL, {responseType : 'json'})
      .pipe(
        map(response => response.data), //since http backend is axios need to obtain data.data values
        catchError(error => throwError(error.message))
      )
      .toPromise()
  }

  async getInverterData() {
    
  }
}
