import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemsPageService } from 'src/service/items-page.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  item_list : any;
  constructor(
    private navCtrl: NavController, 
    private http : ItemsPageService
    

  ) { }

  ngOnInit() {
    return this.http.report().subscribe((res )=>{ //readpolicies is function
      this.item_list = res;
      console.log(this.item_list);
    })
  }

  backPage(){
    this.navCtrl.navigateBack(['home']);
  }
}
