import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { InventoryServiceService } from '../shared/inventory-service.service';

@Component({
  selector: 'app-view-single-inventory',
  templateUrl: './view-single-inventory.component.html',
  styleUrls: ['./view-single-inventory.component.css']
})
export class ViewSingleInventoryComponent implements OnInit {

  inventoryItem: FormGroup;
  id: number;

  constructor(public service: InventoryServiceService, private fb: FormBuilder, private data: DataService) { }
  form = this.service.formData;

  ngOnInit(): void {
    this.data.currentMessage.subscribe(id => this.id = id)
    this.inventoryItem = this.fb.group({
      inventoryId: [0],
      inventoryName: [''],
      description: [''],
      unitPrice: [0],
      availableUnits: [0],
      reOrderLevel: [0]
    })
    this.service.getInventoryById(this.id).then(
      res => {
        this.form=res
      }
    );
  }

}
