import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-stu',
  templateUrl: './stu.component.html',
  styleUrls: ['./stu.component.css']
})
export class StuComponent {
students!: any[];
constructor(private studentService: StudentService) {}

  DisplayStudent() {
    this.students = this.studentService.getStudents();
  }
}

