import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingUpdateComponent } from 'src/app/admin/clothing-update/clothing-update.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: ':id', component: ClothingUpdateComponent },
  { path: 'new', component: ClothingUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
