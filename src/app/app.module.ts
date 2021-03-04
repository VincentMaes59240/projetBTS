import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapteursComponent } from './capteurs/capteurs.component';

import { CapteurService } from "./services/capteur.service";
import { CapteurViewComponent } from './capteur-view/capteur-view.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { UserService } from "./services/user.service";
import { SingleCapteurComponent } from './single-capteur/single-capteur.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ActionneursComponent } from './actionneurs/actionneurs.component';
import { ActionneurService } from './services/actionneur.service';

const appRoutes: Routes = [
	{ path: 'capteurs', component: CapteurViewComponent },
	{ path: 'capteurs/:id', component: SingleCapteurComponent},
	{ path: 'auth', component: AuthComponent},
	{ path: 'users', component: UserListComponent},
	{ path: 'new-user', component: NewUserComponent},
	{ path: '', component: CapteurViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CapteursComponent,
    CapteurViewComponent,
    AuthComponent,
    SingleCapteurComponent,
    UserListComponent,
    NewUserComponent,
    ActionneursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  	CapteurService,
  	AuthService,
  	UserService,
  	ActionneurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
