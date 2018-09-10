import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class LoginComponent implements OnInit {
   public toggle() {
    return true;
  }
  constructor(
  ) { }

  ngOnInit() {
  }
}
