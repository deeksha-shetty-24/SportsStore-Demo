

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductTableComponent } from './producttable.component';
import { OrderTableComponent } from './ordertable.component';
import { ProductEditorComponent } from './producteditor.component';

//route parameters can be :mode or :id
const adminRouting = RouterModule.forChild([
    {
        path: 'main', component: AdminComponent, children: [
            { path: 'products/:mode/:id', component: ProductEditorComponent },
            { path: 'products/:mode', component: ProductEditorComponent },
            { path: 'products', component: ProductTableComponent },
            { path: 'orders', component: OrderTableComponent }
        ]
    },
    { path: '**', redirectTo: '/store' }
]);

@NgModule({
    imports: [CommonModule, FormsModule, adminRouting],
    providers: [],
    declarations: [AdminComponent, ProductTableComponent, OrderTableComponent, ProductEditorComponent]
})

export class AdminModule { }
