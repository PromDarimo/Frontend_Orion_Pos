import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemsPageService } from 'src/service/items-page.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  item_list : any;

  constructor(
    private navCtrl: NavController, 
    private api : ItemsPageService
  ) { }

  ngOnInit() {
    return this.api.getCustomer().subscribe((res)=>{ //readpolicies is function
      this.item_list = res;
      console.log(this.item_list);
    })
  }

  backPage(){
    this.navCtrl.navigateBack(['home']);
  }

  createItem(){
    this.navCtrl.navigateBack(['create-cus']);
  }
}
