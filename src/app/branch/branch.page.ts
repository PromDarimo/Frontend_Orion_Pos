import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemsPageService } from 'src/service/items-page.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {

  user_list : any;
  constructor(
    private navCtrl: NavController, 
    private api : ItemsPageService

  ) { }

  ngOnInit() {
    return this.api.getUser().subscribe((res) => {
      // this.unit_list = res;
      this.user_list = res;
      console.log(res);
    });
  }

  backPage(){
    this.navCtrl.navigateBack(['home']);

  }

  createItem(){
    this.navCtrl.navigateBack(['create-user']);
  }
}
