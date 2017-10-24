import { Injectable } from '@angular/core';
import {  Headers } from '@angular/http';
import { AppHttpService } from '../app-http.service'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService extends AppHttpService {
    protected url: string;
    protected header: Headers;

    builder (resource: string){
        return super.builder('restaurants' + resource)
    }
}