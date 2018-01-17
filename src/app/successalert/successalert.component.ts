import {Component} from '@angular/core';

@Component({
    selector : 'app-successalert',
    templateUrl : './successalert.component.html',
    // styleUrls: ['../app.component.css']
    styles:[`.isonline{
    color: white;
  }`]
})

export  class SuccessalertComponent{
serverId: number =10;
serverStatus: string = 'Offline';

getServerStatus()
{
    return Math.random() > 0.5  ? 'Online' : 'Offline';
}

getColor()
{
    return this.getServerStatus() === 'Online' ? 'green' : 'Red';
}
}