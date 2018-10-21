import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cafeshop-edit-new-employee',
  templateUrl: './edit-new-employee.component.html',
  styleUrls: ['./edit-new-employee.component.scss']
})
export class EditNewEmployeeComponent {
  @Output() onHide = new EventEmitter<any>();

  public URL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }

  @Input() employeeId = ''
  @Input() employeeName ="";
  @Input() employeePhone ="";
  @Input() employeeEmail="";
  @Input() employeeGender="";
  @Input() employeeBirthday="";
  @Input() employeeType ="";

  saveEmployee() {
    const data = {
      id: this.employeeId,
      name: this.employeeName,
      phone: this.employeePhone,
      gender: this.employeeGender,
      email: this.employeeEmail,
      birthDay: this.employeeBirthday,
      type: this.employeeType
    };

    this.http.put(this.URL + '/employees/' + this.employeeId, data ).subscribe((employeeResponse: any) => {
      this.onHide.emit(data);
   });
  }

  closeEmployeeForm() {
    this.onHide.emit();
  }
}
