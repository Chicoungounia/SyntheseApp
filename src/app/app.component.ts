import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { User } from './models/User';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SyntheseApp';






ngOnInit()
{
  let user:User = {
    id:1,
    name: "Albert",
    email: "ouroauzro@gmail.com"
  }
  console.log(user);
  
}

}
