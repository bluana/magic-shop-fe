import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/components/screens/cart/cart.component';
import { CheckoutComponent } from 'src/components/screens/checkout/checkout.component';
import { ClothesListComponent } from 'src/components/screens/clothes-list/clothes-list.component';
import { ClothingComponent } from 'src/components/screens/clothing/clothing.component';
import { LoginComponent } from 'src/components/screens/login/login.component';
import { RegisterComponent } from 'src/components/screens/register/register.component';
import { ShellComponent } from 'src/components/shell/shell.component';

const routes: Routes = [
  { path: '', component: ShellComponent,
    children: [
      { path: 'clothes', component: ClothesListComponent },
      { path: 'clothes/:id', component: ClothingComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: '', redirectTo: 'clothes', pathMatch: 'full'}
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ClothesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
