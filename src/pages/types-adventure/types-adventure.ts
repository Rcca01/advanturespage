import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';

/**
 * Generated class for the TypesAdventurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-types-adventure',
  templateUrl: 'types-adventure.html',
})
export class TypesAdventurePage {

  adventures:Array<Object>;
  zoomedImage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    this.adventures = this.navParams.get('typeAdventure');
  }

  ionViewDidLoad() {
    console.log(this.adventures);
  }

  zoomImage(img) {
    if (this.zoomedImage =! null && this.zoomedImage == img) { // Necessário para remover a marcação da imagem caso clique na mesma
        this.zoomedImage = null;
    } else {
        this.zoomedImage = img;
    }
  }

}
