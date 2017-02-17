import { Injectable } from '@angular/core';


@Injectable()
export class ApplicationLoggerService {
    public log(logMsg: string) {

        console.log("Called FRom ApplicationLoggerService :::" + logMsg);
    }
}

