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
import { ShellComponent } from '../components/shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DeleteDialogComponent } from '../components/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    ShellComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
