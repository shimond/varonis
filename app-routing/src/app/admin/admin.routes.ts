import { Route } from "@angular/router";
import { AdminRootComponent } from "./admin-root/admin-root.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { AddProductComponent } from "./components/add-product/add-product.component";

export const ADMIN_ROUTES: Route[] = [
  {
    path: '', component: AdminRootComponent,
    children: [
      { path: 'list', component: ProductListComponent },
      { path: 'add', component: AddProductComponent }]
  },

];