import { Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html'
})
export class NewProductComponent implements OnInit{
    constructor(private router:Router){}
    ngOnInit(){
        jQuery('.modal').modal({complete: () => this.router.navigate(['/products'])});
        jQuery('.modal').modal('open');
    }
}