import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = [];
  constructor(){
    for(let i=0;i<10;i++){
      this.switches.push(false);
    }
  }
  flipSwitch(idx):void{
    if(this.switches[idx]){
      this.switches[idx] = false;
      return;
    }
    this.switches[idx] = true;
  }
}
