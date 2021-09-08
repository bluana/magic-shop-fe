import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/services/api/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private apiService: ApiService, private location: Location) {
  }

  async onSubmit(): Promise<void>{
    await this.apiService.register(this.registerForm.value);
    await this.apiService.login(this.registerForm.value);
    this.location.back();
  }

}
