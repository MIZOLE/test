import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'As-Connecte';


  useVoucher(code:any){
    console.log(code)
    // localStorage
  }
}
