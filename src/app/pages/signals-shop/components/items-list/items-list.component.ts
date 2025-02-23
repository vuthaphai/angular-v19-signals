import { Component, signal } from '@angular/core';
import { sampleProductItems } from './view-model/product-item.vm';
import { ItemCardComponent } from "../item-card/item-card.component";

@Component({
  selector: 'app-items-list',
  imports: [ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent {
  readonly products = signal(sampleProductItems);
}
