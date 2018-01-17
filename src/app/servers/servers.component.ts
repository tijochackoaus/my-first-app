import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
   styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {

 allowNewServer: boolean = false;
 serverCreated:boolean = false;
 serverName:string='TestServer2';
 serverCreationMessage: string="No Server was Created."

  constructor() {
    setTimeout(()=>
    {
      this.allowNewServer= true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer()
  {
    this.serverCreated= true;
    this.serverCreationMessage="Server Created Successfully. Server Name is "+ this.serverName  ;
  }

 onServerTextUpdate( event : Event)
 {
  this.serverName = (<HTMLInputElement>event.target).value;
 }

}
