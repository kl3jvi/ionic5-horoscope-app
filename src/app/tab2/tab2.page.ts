import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { CharacteristicsPage } from '../modals/characteristics/characteristics.page';
import { ModalController } from '@ionic/angular';
import {AdmobFreeService} from '../admob.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  months;
  date;
  showMessage = " ";
  loading: any;
  title: any;
  description: any;
  foto: any;
  number=0;
  
  constructor(private admobFreeService: AdmobFreeService,private modalController: ModalController, private loadingCtrl: LoadingController, public toastCtrl: ToastController) { }



  async openModal(id) {
    if (id == "1") {
      this.title = "Aquarius"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/08/AQUARIUS-FEATURED-3.png"
      this.description="Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. These revolutionary thinkers fervently support “power to the people,” aspiring to change the world through radical social progress. Every Aquarian is a rebel at heart: These air signs despise authority and anything that represents conventionality. Free-spirited and eccentric, they can often be identified by their offbeat fashion sensibilities, unusual hobbies, and nonconformist attitude."
    } else if (id == "2") {
      this.title = "Pisces"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/08/Pisces-new-featured-22.png"
      this.description="Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces's attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pains, the hopes and the fears — learned by all of the other signs. This makes these fish the most psychic, empathetic, and compassionate creatures of the astrological wheel. With such immense sensitivity, Pisces can easily become swallowed by emotions and must remember to stay grounded in the material realm (appropriately, Pisces rules the feet)."
    } else if (id == "3"){
      this.title = "Aries"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Aries-4.jpg"
      this.description="Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations (which is appropriate, since the body part associated with Aries is the head). Like their fellow fire signs, Leo and Sagittarius, Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. Uncomplicated and direct in their approach, they often get frustrated by exhaustive details and unnecessary nuances. They like things quick and dirty, a temperament also reflected in their sexual proclivities."
    } else if (id == "4"){
      this.title = "Taurus"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Taurus-22.jpg"
      this.description="Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors. Taurus is ruled by Venus, the enchanting planet that governs love, beauty, and money. Taurus’s Venusian influence make this earth sign the most sensual of the zodiac: These cosmic oxen are enchanted by any physical manifestation of comfort and luxury. Pleasure is a necessity for epicurean Taureans, and they feel most content when pampered. (Taurus governs the neck, so neck caresses are especially irresistible to these bulls.)"
    } else if (id == "5") {
      this.title = "Gemini"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Gemini-3.jpg"
      this.description="Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. Because of Geminis' intrinsic duality, they're often falsely misrepresented as two-faced. In reality, however, Gemini rarely has hidden agendas. Playful and intellectually curious, Gemini is constantly juggling a variety of passions, hobbies, careers, and friend groups. They are the social butterflies of the zodiac: These quick-witted twins can talk to anyone about anything. Find them buzzing between happy hours, dinner parties, and dance floors."
    } else if (id == "6"){
      this.title = "Cancer"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Cancer-3.jpg"
      this.description="Cancer is a cardinal water sign. Represented by the crab, this oceanic crustacean seamlessly weaves between the sea and shore, representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive, and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies of a room. These crabs are highly sensitive to their environments, as well as extremely self-protective. Much like their celestial spirit animal, Cancers are shielded by hard, external shells. At first, these crabs may be perceived as cold or distant. With time, though, Cancers reveal their gentle nature, genuine compassion, and mystical capabilities. Just don't be surprised if it takes a while to get to know them."
    } else if (id == "7"){
      this.title = "Leo"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Leo-1.jpg"
      this.description="Roll out the red carpet, because Leo has arrived. Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves. These lions are natural leaders, and they enjoy cultivating friendships and romances that are artistically and creatively inspired. Playful Leos have no problem leaning into drama-fueled romances that are perfectly suited for the tabloids. (In fact, they may even prefer them.) After all, every Leo perceives him or herself as a celebrity. These astrological divas never get tired of lavish dinners, exclusive parties, or decadent designer wear."
    } else if (id == "8") {
      this.title = "Virgo"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Virgo.jpg"
      this.description="Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice. Virgo rules the digestive system, which makes these earth signs especially attuned to the ingredients that make up a whole — in food and in everything else. They're hyper-aware of every detail."
    } else if (id == "9"){
      this.title = "Libra"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Libra-1.png"
      this.description="Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life. These air signs are the aesthetes of the zodiac: Ruled by Venus, the planet that governs love, beauty, and money, Libras adore high art, intellectualism, and connoisseurship. Suave Libras need to surround themselves with stunning objects and create environments that reflect their exquisite tastes. Accordingly, these air signs make excellent designers, decorators, art critics,and stylists."
    } else if (id == "10"){
      this.title = "Scorpio"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Scorpio.jpg"
      this.description="Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm. Like its fellow water signs, Cancer and Pisces, Scorpio is extremely clairvoyant and intuitive.What makes this water sign unique is its distinctive venomous sting. Like their celestial spirit animal, the scorpion, Scorpios lie in wait and strike when least expected. Life is a game of chess for these calculating water signs, who are constantly plotting several steps ahead in order to orchestrate an eventual checkmate. This doesn't mean their intentions are necessarily nefarious. Scorpios simply know what they want and aren't afraid to work hard and play the long game to get it."
    } else if (id == "11") {
      this.title = "Sagittarius"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/03/Sagittarius-1.jpg"
      this.description="Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. Fueled by wanderlust, these archers can be found traversing all corners of the world on thrill-seeking expeditions.It's no surprise that Jupiter, the planet of abundance, spirituality, and growth, governs Sagittarius. With so many journeys under their belt, Sagittarians are excellent storytellers and can light up any room with their exhilarating tales and infectious laughter. Effortlessly magnetic, Sags easily attract friends and lovers with their senses of humor. They're the comedians of the zodiac and infuse all of their conversations with wit and 'no bullshit' bluntness. While their bon mots are unmatched, Sags must remember to keep their sharp tongues in check."
    } else if (id == "12"){
      this.title = "Capricorn"
      this.foto = "https://gemsyogi.com/wp-content/uploads/2019/08/Capricorn-new-feature-1.png"
      this.description="The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms. They scale the steepest mountains — Capricorn rules the knees, making it easier for this sign to climb — while simultaneously exploring their psychic strengths. Capricorns tap into their inner fortitude to overcome whatever stands between them and their long-term goals, and they don’t let anything distract them from getting ahead. Because of their unwavering focus, however, they are often perceived as cold and unemotional. Sea goats must remember that not every success in life can be featured on a résumé and that compassion is as important as any professional advancement."
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


