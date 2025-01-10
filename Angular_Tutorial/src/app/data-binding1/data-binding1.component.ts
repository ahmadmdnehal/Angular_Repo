import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding1',
  imports: [],
  templateUrl: './data-binding1.component.html',
  styleUrl: './data-binding1.component.css'
})
export class DataBinding1Component {

  title:String = "Hello this is title for checking as a binding";

  inputType="checkbox";

  mynumber:Number = 9318396560;

  isEngineer = true;

  currentDate = new Date();
  currentTime = this.currentDate.getHours()+":"+this.currentDate.getMinutes()+":"+this.currentDate.getSeconds()

  myClassName:String = "bg-primary";

  classesName:String = "bg-danger";

  // constructor must declare in angular - by default
  constructor(){

  }

  showMessage(message:String){
    alert(message)
  }


  showAlert(data:String,dataStream:number){
    alert('data: '+data +" and datSream: "+dataStream)
  }

  changTitle(){
    this.title="Md Nehal Ahmad";
  }
}
