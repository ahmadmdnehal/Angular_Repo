import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  title:String = "Hello interpolation means .ts to .html";
  inputType ='checkbox';
  rollNo:number=123;
  isIndian:boolean=true;
  todayDate:Date = new Date();

  myClassName:String = "bg-primary";

  classesName:String = "bg-danger";
  constructor(){

  }

  showMessage(message:String){
    alert(message);
  }
}
