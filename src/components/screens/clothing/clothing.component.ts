import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Clothing } from 'src/models/clothing.model';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {
  id = 0;
  clothing!: Clothing;

  constructor( private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.clothing = await this.apiService.getClothing(this.id);
    });
  }

}
