import { Component, OnInit } from '@angular/core';
import { BloodRequestService } from '../../service/blood-request.service';
import { Router } from '@angular/router';
import { BloodRequest } from '../../model/blood-request';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { User } from '../../model/user';
import { AppHttpInterceptor } from '../../app-http-interceptor';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }]
})
export class UserRequestComponent implements OnInit {
  private request: any;

  public message: string;

  constructor(private requestService: BloodRequestService, private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.requestService.getter();

this.http.get("http://localhost:8080/requestRepo")
.subscribe(
res => {this.request=res;



 console.log(this.request.status);
  if(this.request.status==false)
  {
   this.message="Your Request has been Approved by the Admin!";
  }
  else if(this.request.status==true){
    this.message="Your Request is on pending!";
  }
  
console.log(res);
}, 
(error) => console.log(error)
  )
  }

  deleteRequest(request) {
    if(window.confirm('Are sure you want to delete this item ?')){
    this.requestService.deleteBloodRequest(request.bloodRequestId).subscribe(() => {
      location.reload();
    }, (error) => {
      console.log(error);
      
    });
  }}
  

  updateRequest(request) {
    this.requestService.setter(request);
    this.router.navigate(['/search']);
  }

}


