import { Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';
import {AuthService} from "../../../user/services/auth.service";
import { ProductsService } from '../../services/products.service';


@Component({
    selector: 'app-new-product',
    templateUrl: 'new-product.component.html'
})
export class NewProductComponent implements OnInit{
    product: any = {};

    constructor(
        private router:Router,
        protected authService: AuthService,
        protected httpService: ProductsService
    ){}

    ngOnInit(){

        jQuery('.modal').modal({complete: () => this.router.navigate(['/products'])});
        jQuery('.modal').modal('open');

        this.authService.getUser()
            .then((res) => {
                this.product.restaurant_id = res.restaurant.id;
            });
    }
    addFile(e){
        this.product.photo = e.target.files[0];
    }
    save(e){
        e.preventDefault();

        if(!this.product.photo){
            window.Materialize.toast('Selectione uma foto antes', 300, 'red')
            return;
        }

        let formdata = new FormData;
        formdata.append('photo', this.product.photo);
        formdata.append('name', this.product.name);
        formdata.append('description', this.product.description);
        formdata.append('price', this.product.price);
        formdata.append('restaurant_id', this.product.restaurant_id);

        this.httpService.builder()
            .insert(formdata)
            .then(() => {
                this.httpService.eventEmitter.emit();
                jQuery(".modal").modal("close");
            })

    }
}