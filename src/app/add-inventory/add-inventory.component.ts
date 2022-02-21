import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryServiceService } from '../shared/inventory-service.service';


@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  inventoryItem: FormGroup;

  constructor(public service:InventoryServiceService,private fb: FormBuilder,private _router: Router) { }
  form=this.service.formData;

  ngOnInit(): void {
    this.inventoryItem=this.fb.group({
      inventoryName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      description:['',[Validators.required,Validators.minLength(10)]],
      unitPrice:[Number,[Validators.required,Validators.min(1)]],
      availableUnits:[Number,Validators.required],
      reOrderLevel:[Number]
    })
  }
  onSubmit(){
    this.service.formData=Object.assign(this.service.formData,this.inventoryItem.value);
    this.service.postInventory(this.service.formData).subscribe(
      res => { 
        console.log(this.service.formData);
        console.log(res);
        alert("Inventory Saved Successfully");
        this._router.navigate([''])
      // this.inventoryItem.reset();
      }
    )  
  }
  cancel(){
    this.inventoryItem.reset();
  }

}
