import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { CharacteristicsPage } from '../modals/characteristics/characteristics.page';
import { ModalController } from '@ionic/angular';
import { AdmobFreeService } from '../admob.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  months;
  date;
  showMessage = " ";
  loading: any;
  title: any;
  description: any;
  foto: any;
  number = 0;
  res;
  constructor(public http: HttpClient, private admobFreeService: AdmobFreeService, private modalController: ModalController, private loadingCtrl: LoadingController, public toastCtrl: ToastController) { }

  ngOnInit() {
    return this.http.get("https://api.npoint.io/efba125da6ad2ab622e8").subscribe(data => {
      this.res = data["descriptions"]
    })
  }
  async openModal(id) {
    if (id == "1") {
      this.title = "Aquarius"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/08/AQUARIUS-FEATURED-3.png"
      this.description = this.res[this.title]
    } else if (id == "2") {
      this.title = "Pisces"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/08/Pisces-new-featured-22.png"
      this.description = this.res[this.title]
    } else if (id == "3") {
      this.title = "Aries"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Aries-4.jpg"
      this.description = this.res[this.title]
    } else if (id == "4") {
      this.title = "Taurus"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Taurus-22.jpg"
      this.description = this.res[this.title]
    } else if (id == "5") {
      this.title = "Gemini"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Gemini-3.jpg"
      this.description = this.res[this.title]
    } else if (id == "6") {
      this.title = "Cancer"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Cancer-3.jpg"
      this.description = this.res[this.title]
    } else if (id == "7") {
      this.title = "Leo"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Leo-1.jpg"
      this.description = this.res[this.title]
    } else if (id == "8") {
      this.title = "Virgo"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Virgo.jpg"
      this.description = this.res[this.title]
    } else if (id == "9") {
      this.title = "Libra"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Libra-1.png"
      this.description = this.res[this.title]
    } else if (id == "10") {
      this.title = "Scorpio"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Scorpio.jpg"
      this.description = this.res[this.title]
    } else if (id == "11") {
      this.title = "Sagittarius"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Sagittarius-1.jpg"
      this.description = this.res[this.title]
    } else if (id == "12") {
      this.title = "Capricorn"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/08/Capricorn-new-feature-1.png"
      this.description = this.res[this.title]
    }
    const modal = await this.modalController.create({
      component: CharacteristicsPage,
      componentProps: {
        title: this.title,
        description: this.description,
        foto: this.foto,
      }
    });
    return await modal.present();
  }


  async select_dropdown_value() {
    await this.presentLoading();
    setTimeout(() => {
      if (this.months == 12 && this.date > 21 && this.date < 32 || this.months == 1 && this.date < 20) {
        this.showMessage = "Capricorn";
        this.admobFreeService.Interstitial();
      } else if (this.months == 1 && this.date >= 20 || this.months == 2 && this.date <= 18) {
        this.showMessage = "Aquarius";
        this.admobFreeService.Interstitial();
      } else if (this.months == 2 && this.date > 18 && this.date < 30 || this.months == 3 && this.date <= 20) {
        this.showMessage = "Pisces";
        this.admobFreeService.Interstitial();
      } else if (this.months == 3 && this.date > 20 && this.date <= 31 || this.months == 4 && this.date <= 20) {
        this.showMessage = "Aries";
        this.admobFreeService.Interstitial();
      } else if (this.months == 4 && this.date > 20 && this.date <= 30 || this.months == 5 && this.date <= 20) {
        this.showMessage = "Taurus";
        this.admobFreeService.Interstitial();
      } else if (this.months == 5 && this.date > 20 && this.date <= 31 || this.months == 6 && this.date <= 21) {
        this.showMessage = "Gemini";
        this.admobFreeService.Interstitial();
      } else if (this.months == 6 && this.date > 21 && this.date <= 30 || this.months == 7 && this.date <= 22) {
        this.showMessage = "Cancer";
        this.admobFreeService.Interstitial();
      } else if (this.months == 7 && this.date > 22 && this.date <= 31 || this.months == 8 && this.date <= 22) {
        this.showMessage = "Leo";
        this.admobFreeService.Interstitial();
      } else if (this.months == 8 && this.date > 22 && this.date <= 31 || this.months == 9 && this.date <= 22) {
        this.showMessage = "Virgo";
        this.admobFreeService.Interstitial();
      } else if (this.months == 9 && this.date > 22 && this.date <= 30 || this.months == 10 && this.date <= 22) {
        this.showMessage = "Libra";
        this.admobFreeService.Interstitial();
      } else if (this.months == 10 && this.date > 22 && this.date <= 31 || this.months == 11 && this.date <= 22) {
        this.showMessage = "Scorpio";
        this.admobFreeService.Interstitial();
      } else if (this.months == 11 && this.date > 22 && this.date <= 30 || this.months == 12 && this.date <= 22) {
        this.showMessage = "Sagittarius";
        this.admobFreeService.Interstitial();
      } else {
        this.presentToast()
      }
    }, 1000);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Calculating...', duration: 1000 });
    return this.loading.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({ position: 'bottom', color: 'dark', message: 'Please choose a valid date.', duration: 2000 });
    toast.present();
  }
}


