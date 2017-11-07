import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../services/products.service';
import {AuthService} from "../../user/services/auth.service";

@Component({
    selector: 'app-products',
    templateUrl: 'products.component.html'
})
export class ProductsComponent implements OnInit{
    products = {};
    constructor (
        private httpService: ProductsService,
        protected authService: AuthService
    ){}
    ngOnInit(){
        this.authService.getUser()
            .then((res) => {
                let id = res.restaurant.id;
                let options = {
                    filters: [
                        {restaurant_id: id}
                    ]
                }
                this.httpService.eventEmitter
                    .subscribe(() => {
                        this.httpService.builder()
                            .list(options)
                            .then((res) =>
                                this.products = res
                            );
                    })
                this.httpService.eventEmitter.emit();

            });
    }
    remove(id:number){
        this.httpService.builder().delete(id).then(() => {
            this.httpService.eventEmitter.emit();
        });
    }
}