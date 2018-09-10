import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl: string = "http://localhost:8080";
  private user=new User();

  constructor(private http: HttpClient) { }


getUsers(){
  return this.http.get(this.baseUrl + '/userJson');
}

deleteUser(id: number){
  return this.http.delete(this.baseUrl + '/userDelete/' + id);
}

createUser(user: User){
 // console.log(user);
  return this.http.post(this.baseUrl + '/saveUser', user);
}

updateUser(user: User) {
  return this.http.put(this.baseUrl + '/saveUser', user);
}

setter(user: User){
  this.user = user;
}

getter(){
  return this.user;
}

}