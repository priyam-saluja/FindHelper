import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { User } from './bean/user';

@Injectable({
  providedIn: 'root'
})
 export class LoginServiceService {
  baseURL: string = "http://localhost:8080/";
  user:User

  constructor(private http:HttpClient) { 
    this.user= new User
    this.user.email="18@gmail.com"
    this.user.name="Priyam"
    this.user.password="abc"
    

  }

  login() : Observable<any> {
    return this.http.get(this.baseURL + 'api/login')

  }

  register(user:User) : Observable<String>{
    return this.http.post<String>(this.baseURL +'api/register',user) .pipe(
     
    );
  }
}
