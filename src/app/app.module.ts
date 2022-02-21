import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewSingleInventoryComponent } from './view-single-inventory/view-single-inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListInventoryComponent,
    AddInventoryComponent,
    UpdateInventoryComponent,
    ViewSingleInventoryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
