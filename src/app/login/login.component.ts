import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }
  hide=true;

  authenticate(){
    console.log('Calling service to authenticate ')
     this.loginService.login().subscribe(
       (response)=>{
       console.log('response received')
     },
     (error) => {                              //error() callback
      console.error('Request failed with error')
      
    }
     )
  }
}
