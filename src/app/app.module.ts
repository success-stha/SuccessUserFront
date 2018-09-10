import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //<--ng model lives here
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { Modal1Component } from './components/modal1/modal1.component';
import { UnRegNavbarComponent } from './components/un-reg-navbar/un-reg-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { EventComponent } from './components/event/event.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UserRequestComponent } from './components/user-request/user-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    AboutComponent,
    RegisterComponent,
    FooterComponent,
    Modal1Component,
    UnRegNavbarComponent,
    LoginComponent,
    EventComponent,
    UserinfoComponent,
    UserRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
