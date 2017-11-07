import { Injectable, EventEmitter } from '@angular/core';
import { AppHttpService } from '../../app-http.service';

@Injectable()
export class ProductsService extends AppHttpService {
    eventEmitter: EventEmitter<any> = new EventEmitter;

    builder (resource: string = '') {
        return super.builder('products' + resource);
    }
    update (id: number, data: object){
        let observable = this.http.post(this.url + '/' + id, data,{headers: this.header})
           return this.toPromise(observable);
    }
}