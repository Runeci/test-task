import { Component, Input } from '@angular/core';
import { TransactionView } from '../../../shared/data.typing';

@Component({
    selector: 'app-content-card',
    templateUrl: './content-card.component.html',
    styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
    @Input() public transactionCard!: TransactionView;
}
