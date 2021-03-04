import { Component, OnInit, Input } from '@angular/core';
import { ActionneurService } from '../services/actionneur.service';

@Component({
  selector: 'app-actionneurs',
  templateUrl: './actionneurs.component.html',
  styleUrls: ['./actionneurs.component.scss']
})
export class ActionneursComponent implements OnInit {
	@Input()actionneurName: string = "";
 	@Input()actionneurValue: string = "";
 	@Input()actionneurID: number ;

  	constructor(private actionneurService: ActionneurService) { }

	ngOnInit(): void { }

	onActivate(id)
	{
		var value;
		if(id == 0)
		{
			this.actionneurService.actionneurs[0].value = 1;
			value = this.actionneurService.actionneurs[0].value;
			this.actionneurService.putValueOnServer("ginophare", value);	
		}
		else if(id == 1)
		{
			this.actionneurService.actionneurs[1].value = 1;
			value = this.actionneurService.actionneurs[1].value;
			this.actionneurService.putValueOnServer("lampe", value);
		}
		
	}
	
	onDesactivate(int)
	{
		var value;
		if(int == 0)
		{
			this.actionneurService.actionneurs[0].value = 0;
			value = this.actionneurService.actionneurs[0].value;
			this.actionneurService.putValueOnServer("ginophare", value);
		}
		else if(int == 1)
		{
			this.actionneurService.actionneurs[1].value = 0;
			value = this.actionneurService.actionneurs[1].value;
			this.actionneurService.putValueOnServer("lampe", value);
		}
	}

	getValue(actionneurID)
	{
		return this.actionneurService.actionneurs[actionneurID].value;
	}
}
