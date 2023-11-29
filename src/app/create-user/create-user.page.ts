import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemsPageService } from 'src/service/items-page.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  item_list : any;
  
  user_list : any = {
    id : 0,
    user_name : "",
    passowrd : ""
  }

  constructor(
    private navCtrl: NavController, 
    private api : ItemsPageService
  ) { }

  ngOnInit() {
  }

  backPage(){
    this.navCtrl.navigateBack(['branch']);
  }

  save(item : any){
    this.api.createUser(item).subscribe((res) => {
      console.log("success");
    });
    this.navCtrl.navigateBack(['branch']);
  }
}
