import { Component, OnInit } from '@angular/core';
import { CapteurService } from '../services/capteur.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-single-capteur',
  templateUrl: './single-capteur.component.html',
  styleUrls: ['./single-capteur.component.scss']
})
export class SingleCapteurComponent implements OnInit {
  name: string = 'Capteur';
  value: string = 'Value';	

  constructor(private capteurService: CapteurService, private route: ActivatedRoute) { }

  ngOnInit()
  {
  	const id = this.route.snapshot.params['id'];
  	this.name = this.capteurService.getAppareilById(+id);
  }

}
