import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  voucherItems =[
    {price: "R5", data:"Data: 500MB", exp:" 24 Hour"},
    {price: "R15", data:"Data: 1GB", exp:" 2 Day"},
    {price: "R25", data:"Data: 5GB", exp:" 7 Day"}

    
  ]

  saveVoucher(item:any){
    item.voucher = "jwkkwow27377"
    item.status = "Not Used"
  
    localStorage.setItem("voucher",JSON.stringify(item))
    alert("Voucher Purchase, Enjoy")

  }

}
