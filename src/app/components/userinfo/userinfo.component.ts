import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../../app-http-interceptor';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }]
})
export class UserinfoComponent implements OnInit {

 public user: any;

  constructor(private userService: UserServiceService, private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/user/profile")
    .subscribe(

res => {
 this.user=res;
  console.log(res);}
    )
  }

  updateUser(user) {
    this.userService.setter(user);
    this.router.navigate(['/register']);
  }

}
