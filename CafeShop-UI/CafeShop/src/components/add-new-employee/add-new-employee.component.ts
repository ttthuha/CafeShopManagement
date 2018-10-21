import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import uuid from 'uuid';

@Component({
  selector: 'cafeshop-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent {
  @Output() buttonClicked = new EventEmitter<any>();
  public URL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  employeeName ="";
  employeePhone ="";
  employeeEmail="";
  employeeGender="";
  employeeBirthday="";
  employeeType ="";
  addEmployee()
  {
    this.http.post(this.URL + '/employees', {
      id: uuid.v4(),
      name: this.employeeName,
      phone: this.employeePhone,
      gender: this.employeeGender,
      email: this.employeeEmail,
      birthDay: this.employeeBirthday,
      type: this.employeeType
    }).subscribe((historyOrdersResponse: any) => {
    this.buttonClicked.emit();
   });
  }
  closeEmployeeForm()
  {
    this.buttonClicked.emit();
  }
}
