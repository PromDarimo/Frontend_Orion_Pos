import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  constructor(
    private navCtrl: NavController, 
  ) { }

  ngOnInit() {
  }

  backPage(){
    this.navCtrl.navigateBack(['home']);
  }

  createItem(){

  }
}
