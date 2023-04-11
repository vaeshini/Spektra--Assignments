import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student = [
    { id: 1, name: 'Varshini', email: 'varshini.1@gmail.com' },
    { id: 2, name: 'Divya', email: 'divya@gmail.conm' },
    { id: 3, name: 'likhitha', email: 'likhi@gmail.com' }
  ];

  constructor() { }

  getStudents():any[] {
    return this.student;
  }
}


