import { Component } from '@angular/core';
import { Student } from './models/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inf1013';
  students: Student[];
  selected?: Student;


  constructor (){
    this.students = [
      new Student ("Winner","Pindi","ygfriw",[]),
      new Student ("eed","Pindi","ygfriw",[]),
      new Student ("Winndefdfewer","Pindi","ygfriw",[]),
      new Student ("Winnefrwger","Pindi","ygfriw",[]),
      new Student ("Winrtehgthrner","Pindi","ygfriw",[])
    ];

  }

  //Methode qui permet de selectionner un student
  select(studentSelected:Student){
    this.selected = studentSelected;
    console.log(this.selected);
  }
}
