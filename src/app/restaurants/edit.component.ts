import { Component, OnInit} from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit{
    dragging: boolean = false;
    constructor (protected httpService: AppHttpService){}
    ngOnInit(){
        this.httpService.getUser()
            .then((res) => {
                let user = res.restaurant.id;
            });
    }

    upload(e){
        e.preventDefault();
        console.log(e.dataTransfer.files)
    }
    dragover(e){
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }
}