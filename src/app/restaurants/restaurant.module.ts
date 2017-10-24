import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EvaluationComponent } from './dashboard/evaluation.component';

import { ProductsComponent } from './products.component';
import { NewProductComponent } from './products/new-product.component';
import { EditProductComponent } from './products/edit-product.component';

import { EditComponent } from './edit.component';
import { PasswordComponent } from './password.component';
import { ProfileComponent } from './profile.component';

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
    { path: 'edit', component: EditComponent},
    { path: 'password', component: PasswordComponent},
    { path: 'profile', component: ProfileComponent},

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        ProductsComponent,
        EditComponent,
        EditProductComponent,
        NewProductComponent,
        PasswordComponent,
        ProfileComponent,
    ]
})
export class RestaurantsModule {}