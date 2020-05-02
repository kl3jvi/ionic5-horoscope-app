import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import {AdmobFreeService} from '../../admob.service'


@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.page.html',
  styleUrls: ['./characteristics.page.scss'],
})
export class CharacteristicsPage {

  constructor(private admobFreeService: AdmobFreeService,private modalController: ModalController, public platform: Platform) { }
  title;
  description;
  foto;
  fotoLoading;

  async closeModal() {
    await this.modalController.dismiss();
    this.admobFreeService.hideBanner();
  }

  ionViewDidEnter(){
    this.fotoLoading=true;
  }

  ngOnInit() {
    this.admobFreeService.BannerAd();
  }
}
