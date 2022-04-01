import { Component, OnInit } from '@angular/core';
import { getData } from '@app/utility';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  ngOnInit(): void {
    getData('/data').then((data: any) => {
      console.log('angular', data);
    });
  }
}
