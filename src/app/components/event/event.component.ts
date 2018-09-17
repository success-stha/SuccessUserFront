import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { EventServiceService } from '../../service/event-service.service';
import { HttpClient } from '@angular/common/http';
import { AppHttpInterceptor } from '../../app-http-interceptor';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public event: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/events", {headers: { [AppHttpInterceptor.SKIP_TOKEN]: '' } })
  .subscribe((res)=> {console.log(res); 
    this.event=res;
  }
)
  }

}
