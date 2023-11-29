import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {item} from '../../src/service/model'
@Injectable({
  providedIn: 'root'
})
export class ItemsPageService {
  // PHP_API_SERVER = "http://localhost:8080/orion_pos";
  constructor(
    private api: HttpClient
  ) { }

  //read item
  readData(): Observable<item[]> {
    return this.api.get<item[]>("http://localhost:8080/orion_pos/read.php");
  }

  //get unit table
  readUnitData(): Observable<any[]> {
    return this.api.get<any[]>("http://localhost:8080/orion_pos/read_unit.php");
  }

  createItem(item: any): Observable<any>{
    return this.api.post<any>('http://localhost:8080/orion_pos/create_item.php',JSON.stringify(item));
  }

  //get user log in
  getUser(): Observable<any[]> {
    return this.api.get<any[]>("http://localhost:8080/orion_pos/user.php");
  }

  //getCustomer
  getCustomer(): Observable<any[]> {
    return this.api.get<any[]>("http://localhost:8080/orion_pos/read_cus.php");
  }

  report(): Observable<any[]> {
    return this.api.get<any[]>("http://localhost:8080/orion_pos/report.php");
  }

  createCat(item: any): Observable<any>{
    return this.api.post<any>('http://localhost:8080/orion_pos/create_cat.php',JSON.stringify(item));
  }

  createUnit(item: any): Observable<any>{
    return this.api.post<any>('http://localhost:8080/orion_pos/create_unit.php',JSON.stringify(item));
  }

  createUser(item: any): Observable<any>{
    return this.api.post<any>('http://localhost:8080/orion_pos/create_user.php',JSON.stringify(item));
  }

  createCus(item: any): Observable<any>{
    return this.api.post<any>('http://localhost:8080/orion_pos/create_cus.php',JSON.stringify(item));
  }

  updateItem(item: any){
    return this.api.put<any>('http://localhost:8080/orion_pos/edit_item.php',JSON.stringify(item));
  }

  deleteItem(item: any){
    return this.api.put<any>('http://localhost:8080/orion_pos/delete_item.php',JSON.stringify(item));
  }
}
