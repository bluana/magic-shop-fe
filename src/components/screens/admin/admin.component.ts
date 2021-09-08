import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/components/delete-dialog/delete-dialog.component';
import { Clothing } from 'src/models/clothing.model';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['name', 'size', 'color', 'condition', 'available', 'price', 'actions'];
  clothes: Clothing[] = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.clothes = await this.apiService.getClothes();
  }

  openDeleteDialog(clothing: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {data: {clothing}});

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.apiService.deleteClothing(result.id);
        this.clothes = await this.apiService.getClothes();
      }
    });
  }

}
