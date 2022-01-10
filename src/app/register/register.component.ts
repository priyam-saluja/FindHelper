import { Component, OnInit } from '@angular/core';
import { User } from '../bean/user';
import { LoginServiceService } from '../login-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

regForm:FormGroup;
user:User;
userString:String;

  constructor(private loginService: LoginServiceService,private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      name: '',
      email: '',
      pwd:''
    });
    
    this.user= new User
    this.userString=''
  
   }

  ngOnInit(): void {
   
  }


  onSubmit(): void {
    this.user.name= this.regForm.controls['name'].value;
    this.user.email=this.regForm.controls['email'].value
    this.user.password=this.regForm.controls['pwd'].value;
  
    console.warn('Your order has been submitted', this.regForm.value);
    this.loginService.register(this.user).subscribe(
    user =>{this.userString = user}
    );
    this.regForm.reset();
  }


  register(){
   
    
   

  }

}
