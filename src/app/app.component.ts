import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './pages/colors-quiz/components/toolbar/toolbar.component';
import { CartComponent } from './pages/signals-shop/components/cart/cart.component';
import { ItemsListComponent } from './pages/signals-shop/components/items-list/items-list.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [SharedModule, ToolbarComponent, ItemsListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v19-signals';
}
