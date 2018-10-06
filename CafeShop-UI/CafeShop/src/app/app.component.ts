import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'cafeshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'CafeShop';
  public tables = [];
  public foods = [];
  public selectedTable = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/tables').subscribe((tablesResponse: any) => {
      this.tables = tablesResponse;
    });

    this.http.get('http://localhost:5000/api/foods').subscribe((foodResponse:any)=> {
      this.foods=foodResponse
    })
  }
}
