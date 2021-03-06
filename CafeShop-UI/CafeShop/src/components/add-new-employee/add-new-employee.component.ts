import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent {
  @Output() onHide = new EventEmitter<any>();
  public URL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  employeeName ="";
  employeePhone ="";
  employeeEmail="";
  employeeGender="";
  employeeBirthday="";
  employeeType ="";

  addEmployee() {
    const data = {
      name: this.employeeName,
      phone: this.employeePhone,
      gender: this.employeeGender,
      email: this.employeeEmail,
      birthDay: this.employeeBirthday,
      type: this.employeeType
    } as any;

    this.http.post(this.URL + '/employees', data).subscribe((employeeResponse: any) => {
      data.id = employeeResponse;
      this.onHide.emit(data);
   });
  }

  closeEmployeeForm() {
    this.onHide.emit();
  }
}
