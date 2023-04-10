import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  students = [
    {id: 1, name: 'Varshini', gender: 'female', dob: '01-01-2000', coursefee: 500},
   ];
  onSubmit(form: NgForm) {
    const newStudent = {
      id: this.students.length + 1,
      name: form.value.studentName,
      gender: form.value.gender,
      dob: form.value.dob,
      coursefee: form.value.coursefee
    };
    this.students.push(newStudent);
    form.reset();
  }
  getTotalStudents() {
    return this.students.length;
  }
  
  getTotalMales() {
    return this.students.filter(student => student.gender === 'Male').length;
  }
  
  getTotalFemales() {
    return this.students.filter(student => student.gender === 'Female').length;
  }
}
