import { Component, OnInit } from '@angular/core';
import { BloodRequestService } from '../../service/blood-request.service';
import { Router } from '@angular/router';
import { BloodRequest } from '../../model/blood-request';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {
  private request: BloodRequest;

  constructor(private requestService: BloodRequestService, private router: Router) { }

  ngOnInit() {
    this.requestService.getter();
  this.requestService.getById(6)
  .subscribe(
res => {
  this.request=res;
console.log(res);
}, 
(error) => console.log(error)
  )
  }

  deleteRequest(request) {
    if(window.confirm('Are sure you want to delete this item ?')){
    this.requestService.deleteBloodRequest(request.bloodRequestId).subscribe(() => {
    }, (error) => {
      console.log(error);
    });
  }}
  

  updateRequest(request) {
    this.requestService.setter(request);
    this.router.navigate(['/']);
  }

}


