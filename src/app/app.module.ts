import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsListComponent } from './product-page/products-list/products-list.component';
import { ProductComponent } from './product-page/product/product.component';
import { FeedbackListComponent } from './product-page/product/feedback-list/feedback-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductsListComponent,
    ProductComponent,
    FeedbackListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
