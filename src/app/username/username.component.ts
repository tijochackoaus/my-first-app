import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

allowUserName:boolean = false;
  constructor() { }


  userName:string ="";

  isUserNameEmpty()
  {
    return this.userName == '';
  }

  ngOnInit() {
  }

}
