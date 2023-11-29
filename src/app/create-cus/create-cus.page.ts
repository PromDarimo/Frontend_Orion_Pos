import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemsPageService } from 'src/service/items-page.service';

@Component({
  selector: 'app-create-cus',
  templateUrl: './create-cus.page.html',
  styleUrls: ['./create-cus.page.scss'],
})
export class CreateCusPage implements OnInit {
  user_list : any = {
    id : 0,
    customer_name : "",
    tel : "",
    address : ""
  };
  constructor(
    private navCtrl: NavController, 
    private api : ItemsPageService
  ) { }

  ngOnInit() {
  }

  backPage(){
    this.navCtrl.navigateBack(['customer']);

  }

  save(item : any){
    this.api.createCus(item).subscribe((res) => {
      console.log("success");
    });
    this.navCtrl.navigateBack(['customer']);
  }
}
