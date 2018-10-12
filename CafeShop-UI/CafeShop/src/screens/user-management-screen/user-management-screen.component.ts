import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-user-management-screen',
  templateUrl: './user-management-screen.component.html',
  styleUrls: ['./user-management-screen.component.scss']
})
export class UserManagementScreenComponent implements OnInit {
  employees = [];
  public URL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['name', 'phone', 'email', 'DOB','type'];
  
  ngOnInit(): void {
    this.http.get(this.URL + '/employee').subscribe((employeeResponse: any) => {
    this.employees = employeeResponse;
    });

  }
}
