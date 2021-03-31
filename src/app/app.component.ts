import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppNav';

  toggleNave(nave : any){
    if(nave.opened){
      nave.close()
    }else
    {
      nave.open()
    }
  }
}
