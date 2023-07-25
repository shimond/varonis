import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ADMIN_ROUTES } from './admin.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminRootComponent,
    AddProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ]
})
export class AdminModule { }
