import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-user-management-screen',
  templateUrl: './user-management-screen.component.html',
  styleUrls: ['./user-management-screen.component.scss']
})
export class UserManagementScreenComponent implements OnInit {
  public URL = 'https://localhost:44361/api';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get(this.URL + '/history').subscribe((tablesResponse: any) => {
    //   this.tables = tablesResponse;
    // });

  }
}
