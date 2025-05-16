import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { ProductlistComponent } from "./pages/productlist/productlist.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sampleShop';
}
