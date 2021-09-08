import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Clothing } from 'src/models/clothing.model';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-clothing-update',
  templateUrl: './clothing-update.component.html',
  styleUrls: ['./clothing-update.component.scss']
})
export class ClothingUpdateComponent implements OnInit {
  id!: number;
  clothingForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(),
    available: new FormControl(),
    size: new FormControl(''),
    color: new FormControl(''),
    condition: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(async (params: ParamMap) => {
        this.id = Number(params.get('id'));
        
        if(this.id){
          const clothing = await this.apiService.getClothing(this.id);
          this.clothingForm = new FormGroup({
            name: new FormControl(clothing.name),
            price: new FormControl(clothing.price),
            available: new FormControl(clothing.available),
            size: new FormControl(clothing.size),
            color: new FormControl(clothing.color),
            condition: new FormControl(clothing.condition),
            description: new FormControl(clothing.description),
          });
        }
      });
  }

  async onSubmit(): Promise<void> {
    if(this.id){
      await this.apiService.updateClothing(this.id, this.clothingForm.value);
    } else {
      await this.apiService.createClothing(this.clothingForm.value);
    }
    this.router.navigateByUrl('/admin');
  }

}
