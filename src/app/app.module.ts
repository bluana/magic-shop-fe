import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/components/header/header.component';
import { AdminComponent } from 'src/components/screens/admin/admin.component';
import { CartComponent } from 'src/components/screens/cart/cart.component';
import { CheckoutComponent } from 'src/components/screens/checkout/checkout.component';
import { ClothesListComponent } from 'src/components/screens/clothes-list/clothes-list.component';
import { ClothingUpdateComponent } from 'src/components/screens/clothing-update/clothing-update.component';
import { ClothingComponent } from 'src/components/screens/clothing/clothing.component';
import { LoginComponent } from 'src/components/screens/login/login.component';
import { RegisterComponent } from 'src/components/screens/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from 'src/components/input/input.component';
import { ShellComponent } from '../components/shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ClothingComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ClothingUpdateComponent,
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
