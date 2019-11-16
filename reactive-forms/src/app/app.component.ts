import { Component } from '@angular/core';
import {FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){}
  get userName(){
    return this.registrationForm.get('userName');
  }
  title = 'reactive-forms';
  registrationForm=this.fb.group(
{
  userName:['Manisha',[Validators.required, Validators.minLength(3)]],
  password:[''],
  confirmPassword:[''],
  address:this.fb.group(
    {
      city:[''],
      state:[''],
      postalCode:['']
    }
  )
}
  );


 /*  registrationForm=new FormGroup(
    {
      userName:new FormControl(''),
      password:new FormControl(''),
      confirmPassword:new FormControl(''),
      address:new FormGroup(
 {
   city: new FormControl(''),
   state:new FormControl(''),
   postalCode:new FormControl('')
 }
      )
    }
  ); */

  loadApiData(){
    debugger
    this.registrationForm.patchValue({
      userName:'Bruce',
      password:'test',
      confirmPassword:'test'/* ,
      address:{
        city: 'pune',
   state:'Maharashtra',
   postalCode:'416225'
      } */
    });
  }
}
