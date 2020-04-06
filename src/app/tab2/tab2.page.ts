import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  months;
  date;
  i;
  showMessage=" ";
  loading: any;

  constructor(private loadingCtrl: LoadingController, ) { }


  async select_dropdown_value() {

    await this.presentLoading();
    
    setTimeout(() => {
      if (this.months == 12 && this.date > 21 && this.date < 32 || this.months == 1 && this.date < 20) {
        this.showMessage = "Your Sun Sign is Capricorn";
      } else if (this.months == 1 && this.date >= 20 || this.months == 2 && this.date <= 18) {
        this.showMessage = "Your Sun Sign is Aquarius";
      } else if (this.months == 2 && this.date > 18 && this.date < 30 || this.months == 3 && this.date <= 20) {
        this.showMessage = "Your Sun Sign is Pisces";
      } else if (this.months == 3 && this.date > 20 && this.date <= 31 || this.months == 4 && this.date <= 20) {
        this.showMessage = "Your Sun Sign is Aries";
      } else if (this.months == 4 && this.date > 20 && this.date <= 30 || this.months == 5 && this.date <= 20) {
        this.showMessage = "Your Sun Sign is Taurus";
      } else if (this.months == 5 && this.date > 20 && this.date <= 31 || this.months == 6 && this.date <= 21) {
        this.showMessage = "Your Sun Sign is Gemini";
      } else if (this.months == 6 && this.date > 21 && this.date <= 30 || this.months == 7 && this.date <= 22) {
        this.showMessage = "Your Sun Sign is Cancer";
      } else if (this.months == 7 && this.date > 22 && this.date <= 31 || this.months == 8 && this.date <= 22) {
        this.showMessage = "Your Sun Sign is Leo";
      } else if (this.months == 8 && this.date > 22 && this.date <= 31 || this.months == 9 && this.date <= 22) {
        this.showMessage = "Your Sun Sign is Virgo";
      } else if (this.months == 9 && this.date > 22 && this.date <= 30 || this.months == 10 && this.date <= 22) {
        this.showMessage = "Your Sun Sign is Libra";
      } else if (this.months == 10 && this.date > 22 && this.date <= 31 || this.months == 11 && this.date <= 22) {
        this.showMessage = "Your Sun Sign is Scorpio";
      } else if (this.months == 11 && this.date > 22 && this.date <= 30 || this.months == 12 && this.date <= 22) {
        this.showMessage = "Your Sun Sign is Sagitarius";
      }
    }, 1000);


  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Calculating...', duration: 1000 });
    return this.loading.present();
  }
}


