import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ClothingUpdateComponent } from './clothing-update/clothing-update.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AdminComponent,
    DeleteDialogComponent,
    ClothingUpdateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AdminModule { }
