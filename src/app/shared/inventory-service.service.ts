import { Injectable } from '@angular/core';
import { InventoryDetail } from './inventory-detail.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(private http: HttpClient) { }

  readonly _baseUrl = "https://localhost:7174/api/Inventory";
  formData:InventoryDetail = new InventoryDetail();
  list: InventoryDetail[];

  postInventory(inventory:InventoryDetail){
    return this.http.post(`${this._baseUrl}/SaveInventory`,inventory);
  }
  getAllInventory(){
    return this.http.get(`${this._baseUrl}/GetAllInventory`).toPromise().then(
      res=>this.list= res as InventoryDetail[]
    );
  }
  getInventoryById(id:number){
    // return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +employeeid
    return this.http.get(`${this._baseUrl}/GetInventoryById?id=${id}`).toPromise().then(
      res=>this.formData=res as InventoryDetail
    )
  }
  updateInventory(inventory:InventoryDetail){
    return this.http.put(`${this._baseUrl}/UpdateInventory`,inventory);
  }
  deleteInventory(id:number){
    return this.http.delete(`${this._baseUrl}/DeleteInventory?id=${id}`);
  }
}
