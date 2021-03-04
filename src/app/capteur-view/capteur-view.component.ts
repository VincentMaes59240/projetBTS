import { Component, OnInit } from '@angular/core';
import { CapteurService } from '../services/capteur.service';
import { ActionneurService } from '../services/actionneur.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-capteur-view',
  templateUrl: './capteur-view.component.html',
  styleUrls: ['./capteur-view.component.scss']
})
export class CapteurViewComponent implements OnInit {
  title = 'projetBTS';
  isAuth = false;

  capteurs: any = [];
  capteurSubscription: Subscription ; 

  actionneurs: any = [];
  actionneurSubscription: Subscription;


  constructor(private capteurService: CapteurService, private actionneurService: ActionneurService) { 
  	setTimeout(
  		() => {
  		  	this.isAuth = true;
  		}, 4000
  	);
  }

  ngOnInit() 
  {
  	this.onFetch();

  	this.capteurSubscription = this.capteurService.capteurSubject.subscribe(
  	  	(capteurs:any[]) => 
  	  	{
  	  		this.capteurs = capteurs;
  	  	}
  	);
  	this.capteurService.emitCapteurSubject();

    this.actionneurSubscription = this.actionneurService.actionneurSubject.subscribe(
      (actionneurs:any[]) => 
      {
        this.actionneurs = actionneurs;
      }
    );
    this.actionneurService.emitActionneurSubject();
  }

  onFetch() {
  	this.capteurService.getCapteursFromServer();
    this.actionneurService.getActionneursFromServer();
  }
}
