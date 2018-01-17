import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { List } from 'linqts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  h3{
    color:dodgerblue;
  }
  `]
})
export class AppComponent {
 
 data: any = null;
  sortedData: any = null;

  constructor(private _http: Http) {
    this.getData();
  }
 
private getData() {
    return this._http.get('http://agl-developer-test.azurewebsites.net/people.json')
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data = data;   
                        this.sortedData = data;                     
                        console.log(this.data);
                });
  }

}