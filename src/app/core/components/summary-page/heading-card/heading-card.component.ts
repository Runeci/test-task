import { Component, Input } from '@angular/core';
import { Transaction } from '../../../shared/data.typing';

@Component({
  selector: 'app-heading-card',
  templateUrl: './heading-card.component.html',
  styleUrls: ['./heading-card.component.scss'],
})
export class HeadingCardComponent {
    @Input() public transactions: Transaction[] = [];
}
