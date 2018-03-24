import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsListComponent } from './product-page/products-list/products-list.component';
import { ProductComponent } from './product-page/product/product.component';
import { FeedbackListComponent } from './product-page/product/feedback-list/feedback-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductService} from "./services/product.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule }  from "@angular/material";
import {MatCardModule} from "@angular/material";
import { FeedbackService } from "./services/feedback.service";
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductsListComponent,
    ProductComponent,
    FeedbackListComponent,
    RegistrationComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MatMenuModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      FormsModule

  ],
  providers: [ProductService, FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
