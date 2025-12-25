import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
 

  name = new FormControl('');
  currentName : string  ='';

   ngOnInit(): void {
   this.name.valueChanges.subscribe(value =>{
    this.currentName = value ?? '';

   });
  }

}
