import { ItemsPageService } from './../../service/items-page.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
  item_list: any[] | undefined;
  isModalOpen: boolean = false;
  // edit_item : any;
  unit_list: any;
  edit_item: any = {
    id: 0,
    item_name: '',
    category_id: 0,
    unit: '',
    price: 0,
    description: '',
    is_deleted : 0
  }
  constructor(
    private navCtrl: NavController,
    private http: ItemsPageService
  ) { }

  ngOnInit() {
    this.http.readData().subscribe((res) => { //readpolicies is function
      this.item_list = res;
      console.log(this.item_list);
    });

    this.http.readUnitData().subscribe((res) => {
      this.unit_list = res;
      console.log("unit", this.unit_list);
    });
  }

  createItem() {
    this.navCtrl.navigateForward(['create-item']);
  }

  backPage() {
    this.navCtrl.navigateBack(['home']);
  }

  onEdit(item: any) {
    console.log(item);
    this.edit_item = item;
    this.isModalOpen = true;
  }

  setOpen(item: any) {
    this.isModalOpen = false;

    console.log(this.edit_item);
    this.http.updateItem(item).subscribe((res) => {
      console.log("Updated", res);
      // this.isModalOpen = false;
    });

  }

  deleteItem(item : any){
    console.log(item);

    this.http.deleteItem(item).subscribe((res) => {
      console.log("deleted", res);
      // this.isModalOpen = false;
    });
  }

  showDelete(){

  }
}
