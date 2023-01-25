import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/Student';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 @Input()
  studentInput?:Student;

  constructor() { }

  ngOnInit(): void {
  }

}
