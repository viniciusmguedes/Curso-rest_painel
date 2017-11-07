import { Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-edit-product',
    templateUrl: 'edit-product.component.html'
})
export class EditProductComponent implements OnInit{
    product: any = {};

    constructor(
        private router:Router,
        private route: ActivatedRoute,
        protected httpService: ProductsService
    ){}

    ngOnInit(){

        jQuery('.modal').modal({complete: () => this.router.navigate(['/products'])});
        jQuery('.modal').modal('open');

        this.route.params.subscribe(params => {
            this.httpService.builder()
                .view(params['id'])
                .then(res => {
                    this.product = res;
                    window.Materialize.updateTextFields();
                })
        })
    }
    addFile(e){
        this.product.photo = e.target.files[0];
    }
    save(e){
        e.preventDefault();
        let formdata = this.product;
        if (this.product.photo){
            formdata = new FormData;
            formdata.append('photo', this.product.photo);
            formdata.append('name', this.product.name);
            formdata.append('description', this.product.description);
            formdata.append('price', this.product.price);
            formdata.append('restaurant_id', this.product.restaurant_id);
        }

        this.httpService.builder()
            .update(this.product.id, formdata)
            .then(() => {
                this.httpService.eventEmitter.emit();
                jQuery(".modal").modal("close");
            })

    }
}