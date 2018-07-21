import { Observable } from 'rxjs/Observable';
import { AdvanturelabProvider } from './../../providers/advanturelab/advanturelab';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TypesAdventurePage } from '../types-adventure/types-adventure';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  adventures:Observable<any>;

  constructor(public navCtrl: NavController,private advanturelabProvider:AdvanturelabProvider) {
    this.adventures = this.advanturelabProvider.getAdventures();
  }

  openAdventure(adventure:number){
    let arrayAdventure:[Object] = [{}];

    this.adventures.subscribe((result)=>{
      arrayAdventure.shift();
      if(adventure == 1){
        arrayAdventure.push(result[0]);
      }else if(adventure == 2){
        arrayAdventure.push(result[1]);
        arrayAdventure.push(result[4]);
      }else if(adventure == 3){
        arrayAdventure.push(result[2]);
        arrayAdventure.push(result[3]);
      }else{
        arrayAdventure.push(result[5]);
      }
    });
    this.navCtrl.push(TypesAdventurePage,{
      typeAdventure:arrayAdventure
    })
  }

}
