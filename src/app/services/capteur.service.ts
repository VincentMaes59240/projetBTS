import { Subject } from 'rxjs/Subject';
import { HttpClientModule, HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription'; 

@Injectable()

export class CapteurService {

	capteurSubject = new Subject<any[]>();
	private capteurs = [];
	

	constructor(private httpClient: HttpClient) { }

	emitCapteurSubject() 
	{
		this.capteurSubject.next(this.capteurs.slice());
	}


	getAppareilById(id: number) {
    const capteur = this.capteurs.find(
        (capteurObject) => {
          return capteurObject.id === id;
       	}
    );
    return capteur;
  }

	getCapteursFromServer()
	{
		this.httpClient
			.get<any[]>('https://esp8266-b7b21-default-rtdb.firebaseio.com/capteurs.json')
			.subscribe(
				(response) => {
					this.capteurs = response;
					this.emitCapteurSubject();	
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}

	
}