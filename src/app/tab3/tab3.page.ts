import { Component } from '@angular/core';
import { Market } from '@ionic-native/market/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( private market: Market,private emailComposer: EmailComposer,) {}

  openPlayStore(){
    this.market.open('com.heroscope');
  }


  sendEmail() {
    let Email = {
      to: 'klejvi2020@gmail.com',
      subject: 'Bug Report for version 0.0.1',
      body: 'I wanted to report a bug i faced on Daily Horoscope and is about ...',
    };
    this.emailComposer.open(Email)
  }
}
