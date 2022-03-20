import { Component } from '@angular/core';
import { Transaction } from '../../shared/data.typing';
import { TRANSACTIONS } from '../../mocks/model';

@Component({
    selector: 'app-summary-page',
    templateUrl: './summary-page.component.html',
    styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent {
    public transactionInfo: Transaction[] = TRANSACTIONS;

    getTransactionType(arr: Transaction[]): string[] {
        return [...new Set(arr.map((transaction) => transaction.type))];
    }
}
