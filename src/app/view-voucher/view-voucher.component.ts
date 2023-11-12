import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-voucher',
  templateUrl: './view-voucher.component.html',
  styleUrls: ['./view-voucher.component.scss']
})
export class ViewVoucherComponent implements OnInit{
   items:any = [ 
    {voucher:"234j8uak9", exp: "16 Nov 2023" ,status:"Used"}
  ]

  ngOnInit(): void {

    const item = localStorage.getItem("voucher")
    if (item !== null) {
      const parsedItem = JSON.parse(item);
      this.items.push(parsedItem);
    }

    // console.log(items)
  }

  useVoucher(code:any){
    alert("Login Successful, Enjoy")
  }

  
  
}
