import { Component, Input } from '@angular/core';
import { TransactionInfo } from '../list-page.component';

@Component({
    selector: 'app-list-table',
    templateUrl: './list-table.component.html',
    styleUrls: ['./list-table.component.scss'],
})
export class ListTableComponent {
    @Input() public transactionInfo: TransactionInfo[] | undefined;
}
