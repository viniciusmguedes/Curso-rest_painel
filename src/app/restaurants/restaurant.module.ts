import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { DashboardComponent } from './components/dashboard.component';
import { EvaluationComponent } from './components/dashboard/evaluation.component';

import { ProductsComponent } from './components/products.component';
import { NewProductComponent } from './components/products/new-product.component';
import { EditProductComponent } from './components/products/edit-product.component';

import { EditComponent } from './components/edit.component';

import { RestaurantService } from './services/restaurant.service';
import { ProductsService } from './services/products.service';

const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent,
        children:[
            {path: 'evaluation/:id', component: EvaluationComponent}
        ]
    },
    { path: 'products', component: ProductsComponent,
        children:[
            {path: 'new', component: NewProductComponent},
            {path: 'edit/:id', component: EditProductComponent}
        ]
    },
    { path: 'edit', component: EditComponent}

]
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        ProductsComponent,
        EditComponent,
        EditProductComponent,
        NewProductComponent,
    ],
    providers: [
        RestaurantService,
        ProductsService
    ]
})
export class RestaurantsModule {}