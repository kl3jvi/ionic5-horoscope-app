import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
months = '';
date = '';
i;
  constructor() { }
  select_dropdown_value(){
    for(this.i=0; this.i<19; this.i++){
      if(this.months == '01' && this.date == this.i ){
        console.log('you are an capricorn')
      }
  }
    }
  

}


 
