import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { ViewSingleInventoryComponent } from './view-single-inventory/view-single-inventory.component';

const routes: Routes = [
  {
    path:'',
    component:ListInventoryComponent
  },
  {
    path:'add-inventory',
    component:AddInventoryComponent
  },
  {
    path:'update-inventory/:id',
    component:UpdateInventoryComponent
  },
  {
    path:'view-inventory/:id',
    component:ViewSingleInventoryComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
