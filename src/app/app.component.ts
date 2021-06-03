import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent{
  title = 'devbrosTest';

  
  constructor(public http: HttpClient) {

  }

  
}



