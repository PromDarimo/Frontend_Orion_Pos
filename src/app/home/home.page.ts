import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  goToItem : boolean = false;
  goToStockList: boolean = false;
  goToUserList: boolean = false;
  goToCusList: boolean = false;
  goToReportList: boolean = false;

  constructor(
    private navCtrl: NavController, //2,
  ) {}


  // go to item
  goToItemList(){
    this.goToUserList = false;
    this.goToItem = true;
    this.goToStockList = false;
    this.goToCusList = false
    this.goToReportList = false
  }

  CreateItem(){
    this.navCtrl.navigateForward(['item-list']);
  }

  // go to stock
  goToStock(){
    this.goToUserList = false;
    this.goToItem = false;
    this.goToStockList = true;
    this.goToCusList = false
    this.goToReportList = false
  }


  goToBranch(){
    this.goToUserList = true;
    this.goToItem = false;
    this.goToStockList = false;
    this.goToCusList = false
    this.goToReportList = false
  }

  goToCustomer(){
    this.goToUserList = false;
    this.goToItem = false;
    this.goToStockList = false;
    this.goToCusList = true
    this.goToReportList = false
  }

  goToReport(){
    this.goToUserList = false;
    this.goToItem = false;
    this.goToStockList = false;
    this.goToCusList = false
    this.goToReportList = true
  }

  //create

  createCustomer(){
    this.navCtrl.navigateForward(['customer']);
  }

  createUser(){
    this.navCtrl.navigateForward(['branch']);

  }

  createStock(){
    this.navCtrl.navigateForward(['stock']);
  }

  report(){
    this.navCtrl.navigateForward(['report']);
    
  }
}
