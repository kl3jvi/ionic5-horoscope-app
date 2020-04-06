import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page { 
  
  // descriptions for signs
  aq_description;
  pisc_description;
  aries_description;
  taurus_description;
  gemini_description;
  canc_description;
  leo_description;
  virgo_description;
  libra_description;
  scorpio_description;
  sag_description;
  cap_description;
  
  ////////date elements!
  current_date;
  aq_range;
  pisc_range
  aries_range
  taurus_range
  gemini_range 
  canc_range
  leo_range
  virgo_range
  libra_range
  scorpio_range
  sag_range
  cap_range

//compatibility variables;
  aq_comp
  pisc_comp
  aries_comp
  taurus_comp
  gemini_comp
  canc_comp
  leo_comp
  virgo_comp
  libra_comp
  scorpio_comp
  sag_comp
  cap_comp
  
  constructor(private httpClient: HttpClient) {}


  getAquarius(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=aquarius&day=today',this.aq_description)
  }

  getPisces(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=pisces&day=today',this.pisc_description)
  }

  getAries(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=aries&day=today',this.pisc_description)
  }

  getTaurus(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=taurus&day=today',this.pisc_description)
  }
  getGemini(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=gemini&day=today',this.pisc_description)
  }

  getCancer(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=cancer&day=today',this.pisc_description)
  }

  getLeo(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=leo&day=today',this.pisc_description)
  }

  getVirgo(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=virgo&day=today',this.pisc_description)
  }

  getLibra(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=libra&day=today',this.pisc_description)
  }

  getScorpio(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=scorpio&day=today',this.pisc_description)
  }

  getSagittarius(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=sagittarius&day=today',this.pisc_description)
  }

  getCapricorn(){
    return this.httpClient.post('https://aztro.sameerkumar.website/?sign=capricorn&day=today',this.pisc_description)
  }

  ionViewDidEnter(){
    this.getAquarius().subscribe((data)=>{
      console.log(data);
      this.aq_description = data['description'];
      this.current_date = data['current_date']
      this.aq_range = data['date_range']
      this.aq_comp =data['compatibility']
    });

    this.getPisces().subscribe((data)=>{
      console.log(data);
      this.pisc_description = data['description'];
      this.pisc_range = data['date_range']
      this.pisc_comp =data['compatibility']
    });

    this.getAries().subscribe((data)=>{
      console.log(data);
      this.aries_description = data['description'];
      this.aries_range = data['date_range']
      this.aries_comp =data['compatibility']
    });

    this.getTaurus().subscribe((data)=>{
      console.log(data);
      this.taurus_description = data['description'];
      this.taurus_range = data['date_range']
      this.taurus_comp =data['compatibility']
    });

    this.getGemini().subscribe((data)=>{
      console.log(data);
      this.gemini_description = data['description'];
      this.gemini_range = data['date_range']
      this.gemini_comp =data['compatibility']
    });

    this.getCancer().subscribe((data)=>{
      console.log(data);
      this.canc_description = data['description'];
      this.canc_range = data['date_range']
      this.canc_comp =data['compatibility']
    });

    this.getLeo().subscribe((data)=>{
      console.log(data);
      this.leo_description = data['description'];
      this.leo_range = data['date_range']
      this.leo_comp =data['compatibility']
    });

    this.getVirgo().subscribe((data)=>{
      console.log(data);
      this.virgo_description = data['description'];
      this.virgo_range = data['date_range']
      this.virgo_comp =data['compatibility']
    });

    this.getLibra().subscribe((data)=>{
      console.log(data);
      this.libra_description = data['description'];
      this.libra_range = data['date_range']
      this.libra_comp =data['compatibility']
    });

    this.getScorpio().subscribe((data)=>{
      console.log(data);
      this.scorpio_description = data['description'];
      this.scorpio_range = data['date_range']
      this.scorpio_comp =data['compatibility']
    });

    this.getSagittarius().subscribe((data)=>{
      console.log(data);
      this.sag_description = data['description'];
      this.sag_range = data['date_range']
      this.sag_comp =data['compatibility']
    });

    this.getCapricorn().subscribe((data)=>{
      console.log(data);
      this.cap_description = data['description'];
      this.cap_range = data['date_range']
      this.cap_comp = data['compatibility']
    });

  }

  
}
