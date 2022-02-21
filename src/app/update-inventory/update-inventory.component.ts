import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../shared/data.service';
import { InventoryServiceService } from '../shared/inventory-service.service';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit, OnChanges {

  inventoryItem: FormGroup;
  id: number;
  disableId:'y';

  constructor(public service: InventoryServiceService, private fb: FormBuilder, private data: DataService,private _router: Router) { }
  form = this.service.formData;

  ngOnInit(): void {
    this.data.currentMessage.subscribe(id => this.id = id)
    this.inventoryItem = this.fb.group({
      inventoryId: [0],
      inventoryName: ['', [Validators.required, Validators.minLength(5)]],
      description: [this.service.formData.inventoryName, [Validators.required, Validators.minLength(3)]],
      unitPrice: [0, Validators.required],
      availableUnits: [0, Validators.required],
      reOrderLevel: [0, [Validators.required, Validators.minLength(3)]]
    })
    this.service.getInventoryById(this.id).then(
      res => {
        this.inventoryItem.setValue({
          inventoryId: res.inventoryId,
          inventoryName: res.inventoryName,
          description: res.description,
          unitPrice: res.unitPrice,
          availableUnits: res.availableUnits,
          reOrderLevel: res.reOrderLevel
        })
      }
    );
  }
  ngOnChanges() {

  }
  onSubmit() {
    this.service.formData = Object.assign(this.service.formData, this.inventoryItem.value);
    this.service.updateInventory(this.service.formData).subscribe(
      () => {
        console.log(this.service.formData);
        alert("Inventory Updated Successfully");
        this._router.navigate([''])
        // this.inventoryItem.reset();
      }
    )
  }

}
