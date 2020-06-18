import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  signinForm: FormGroup;
  user: any = [];
  userData: any;
  showLeft: boolean = true;
  constructor(private fb: FormBuilder) {
    this.signinForm = fb.group({
      'name': [null, Validators.required],
      'place': [null, Validators.required]
  });
   }

  ngOnInit() {
    this.signinForm.reset();
    this.userData = JSON.parse(localStorage.getItem('users'));
    // this.userData = [{ name: "Deepu", place:"9876541233"}, {name:"deva", place:"9856741230"}];
  }

  addUser(formValues) {
    debugger;
    this.userData = [];
    let data = localStorage.getItem('users');
    let userdata = { name : formValues.name , place: formValues.place};
    if(data != null) {
      this.userData = JSON.parse(data);
      this.userData.push(userdata);
    } else{
       this.userData[0] = userdata;
    }
    localStorage.setItem('users', JSON.stringify(this.userData));

    this.userData = JSON.parse(localStorage.getItem('users'));
    this.signinForm.reset();
  }
}
