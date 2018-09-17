import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../../../model/blood-request';
import { BloodRequestService } from '../../../service/blood-request.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../../../app-http-interceptor';

@Component({
  selector: 'app-add-blood-request',
  templateUrl: './add-blood-request.component.html',
  styleUrls: ['./add-blood-request.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }]
})
export class AddBloodRequestComponent implements OnInit {

  public bloodRequest: BloodRequest;

  constructor(private bloodRequestService: BloodRequestService) { }

  ngOnInit() {
  }

  
}
