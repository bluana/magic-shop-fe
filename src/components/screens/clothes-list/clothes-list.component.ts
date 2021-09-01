import { Component, OnInit } from '@angular/core';
import { Clothing } from 'src/models/clothing.model';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss'],
})
export class ClothesListComponent implements OnInit {
  clothes: Clothing[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    this.clothes = await this.apiService.getClothes();
  }
}
