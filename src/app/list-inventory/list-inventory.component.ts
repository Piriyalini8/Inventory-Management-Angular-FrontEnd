import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { InventoryDetail } from '../shared/inventory-detail.model';
import { InventoryServiceService } from '../shared/inventory-service.service';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {

  constructor(public service:InventoryServiceService,private data: DataService) { }

  id:number;
  filterTerm!: string;
  ngOnInit(): void {
    this.service.getAllInventory();
    console.log(this.service.getAllInventory())
    this.data.currentMessage.subscribe(id => this.id = id)
  }
  populateForm(selectedRecord: InventoryDetail) {
    this.service.formData = Object.assign({},selectedRecord);
  }
  getInventoryId(id:number){
    this.service.getInventoryById(id);
    this.data.changeId(id);
    console.log(this.service.getInventoryById(id));
  }
  onDelete(id:number)
   {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteInventory(id)
        .subscribe(res => {
          this.service.getAllInventory();
        },
        err => { console.log(err); })
    }
   }

}
