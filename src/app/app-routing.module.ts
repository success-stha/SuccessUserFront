import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnRegNavbarComponent} from './components/un-reg-navbar/un-reg-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { EventComponent } from './components/event/event.component';
import { UserRequestComponent } from './components/user-request/user-request.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HeaderComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'about', component: AboutComponent },
  { path: 'event', component: EventComponent},
  { path: 'search', component: SearchComponent },
  { path: 'userinfo', component: UserinfoComponent},
  { path: 'userrequest', component: UserRequestComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
