import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemsPageService } from 'src/service/items-page.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.page.html',
  styleUrls: ['./create-item.page.scss'],
})
export class CreateItemPage implements OnInit {

  isModalOpen = false;
  isModalOpen1 = false;
  cat : any = {
    id : 0,
    title : ""
  }

  unit : any = {
    id : 0,
    item_name : ""
  }
  item_list: any = {
    id: 0,
    item_name: '',
    category_id: 0,
    unit: '',
    price: 0,
    description: ''
  }

  category_list: any;
  unit_list: any;
  constructor(
    private navCtrl: NavController,
    private http: ItemsPageService
  ) { }

  ngOnInit() {
    this.http.readUnitData().subscribe((res) => {
      this.unit_list = res;
      console.log("unit", this.unit_list);
    });

    // get category
    return this.http.readData().subscribe((res) => {
      this.category_list = res;
      console.log(this.category_list);
    });


  }

  save(item: any) {
    console.log(item);
    this.http.createItem(item).subscribe((res) => {
      console.log("success");
    });

    this.navCtrl.navigateBack(['item-list']);
  }

  backPage() {
    this.navCtrl.navigateBack(['item-list']);
  }

  close(){
    this.isModalOpen = false;
    this.isModalOpen1 = false;
  }

  confirm(){
    this.isModalOpen = false;
    this.isModalOpen1 = false;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpenUnit(isOpen: boolean){
    this.isModalOpen1 = isOpen;
  }

  createCat(cat : any){
    this.http.createCat(cat).subscribe((res) => {
      console.log("success");
    });
    this.isModalOpen = false;
  }

  createUnit(unit : any){
    console.log(unit);
    this.http.createUnit(unit).subscribe((res) => {
      console.log("success");
    });
    this.isModalOpen1 = false;
  }
}
