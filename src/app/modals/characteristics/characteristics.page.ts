import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.page.html',
  styleUrls: ['./characteristics.page.scss'],
})
export class CharacteristicsPage {

  constructor(private modalController: ModalController, public platform: Platform) { }
  title;
  description;
  foto;
  

  async closeModal() {
    await this.modalController.dismiss();
    
  }

  ngOnInit() {}
}
