import { Subject } from 'rxjs/Subject';
import { HttpClientModule, HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription'; 

@Injectable()

export class ActionneurService {

	actionneurSubject = new Subject<any[]>();
	public actionneurs = [];

	constructor(private httpClient: HttpClient) { }

	emitActionneurSubject() 
	{
		this.actionneurSubject.next(this.actionneurs.slice());
	}


	putValueOnServer(name,  value)
	{
		if(name === "ginophare")
		{
			this.httpClient.put('https://esp8266-b7b21-default-rtdb.firebaseio.com/actionneurs/0/value.json', value)
			.subscribe(
				() => {
					console.log('Envoie de la valeur terminé');
				},
				(error) => {
					console.log('Erreur de sauvegarde' + error);
				}
			)
		}
		else if(name === "lampe")
		{
			this.httpClient.put('https://esp8266-b7b21-default-rtdb.firebaseio.com/actionneurs/1/value.json', value)
			.subscribe(
				() => {
					console.log('Envoie de la valeur terminé');
				},
				(error) => {
					console.log('Erreur de sauvegarde' + error);
				}
			)	
		}
	}

	getActionneurById(id: number) {
	    const actionneur = this.actionneurs.find(
	        (actionneurObject) => 
	        {
	          return actionneurObject.id === id;
	       	}
	    );
	    return actionneur;
  	}
	getActionneursFromServer()
	{
		this.httpClient
			.get<any[]>('https://esp8266-b7b21-default-rtdb.firebaseio.com/actionneurs.json')
			.subscribe(
				(response) => {
					this.actionneurs = response;
					this.emitActionneurSubject();	
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}

	getActionneurValueFromServer(string)
	{
		var getName;
		if(string == "ginophare")
		{
			getName = this.httpClient.get('https://esp8266-b7b21-default-rtdb.firebaseio.com/actionneurs/0/ginophare.json');
		}
		else if(string == "lampe")
		{
			getName = this.httpClient.get('https://esp8266-b7b21-default-rtdb.firebaseio.com/actionneurs/1/lampe.json');
		}
	}
}