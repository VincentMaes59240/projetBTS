import { Component, OnInit, Input } from '@angular/core';
import { CapteurService } from '../services/capteur.service';

@Component({
  selector: 'app-capteurs',
  templateUrl: './capteurs.component.html',
  styleUrls: ['./capteurs.component.scss']
})
export class CapteursComponent implements OnInit {

 @Input()capteurName: string = "";
 @Input()capteurValue: string = "";    
 @Input() indexOfCapteur: number;
 @Input() id: number;

  constructor(private capteurService: CapteurService) { }

  ngOnInit(): void {
  }

	getCapteurValue()
	{
		return this.capteurValue;	
	}

	getColor()
	{
		if(this.capteurName === 'Temperature' && this.capteurValue >= '25') {
			return 'red';
		}
		else if(this.capteurName === 'Temperature' && this.capteurValue < '25') {
			return 'green';
		}
		else if(this.capteurName === 'Humidity' && this.capteurValue >= '30' ) {
			return 'green';
		}
		else if(this.capteurName === 'Humidity' && this.capteurValue < '30' ) {
			return 'red';
		}
		else if(this.capteurName === 'Lux' && this.capteurValue >= '200') {
			return 'green';
		}
		else if(this.capteurName === 'Lux' && this.capteurValue < '200' ) {
			return 'red';
		}
		else if(this.capteurName === 'FloorHumidity' && this.capteurValue >= '300') {
			return 'green';
		}
		else if(this.capteurName === 'FloorHumidity' && this.capteurValue < '300') {
			return 'red';
		}
		else {
			return 'blue';
		}
	}

	RedOrGreen() {
		if((this.capteurName === 'Temperature' && this.capteurValue >= '25') || (this.capteurName === 'Humidity' && this.capteurValue < '30' ) ||  (this.capteurName === 'Lux' && this.capteurValue < '200' ) || (this.capteurName === 'FloorHumidity' && this.capteurValue < '300' )) {
		    	return 'red';
		    }
		else if ((this.capteurName === 'Temperature' && this.capteurValue < '25') || (this.capteurName === 'Humidity' && this.capteurValue >= '30' ) ||  (this.capteurName === 'Lux' && this.capteurValue >= '200' ) || (this.capteurName === 'FloorHumidity' && this.capteurValue >= '300' )) {

		   	return 'green';
		}
		else {
			return 'blue';
		}
	}
}
