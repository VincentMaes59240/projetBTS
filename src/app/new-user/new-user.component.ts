import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { User } from "../models/user.model";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  
  userForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm() 
  {
  	this.userForm = this.formBuilder.group({
  		firstName: ['', Validators.required],
  		lastName: ['', Validators.required],
  		email: ['', [Validators.required, Validators.email]],
  		passwd: ['', Validators.required]
  	});
  }

  onSubmitForm(){
  	const formValue = this.userForm.value;
  	const newUser = new User(
  		formValue['firstName'],
  		formValue['lastName'],
  		formValue['email'],
  		formValue['passwd']
  	);
  	this.userService.addUser(newUser);
  	this.router.navigate(['users']);
  }


}
