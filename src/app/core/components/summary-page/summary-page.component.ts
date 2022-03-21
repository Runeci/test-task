import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionView } from '../../shared/data.typing';
import { TransactionService } from '../../services/transaction.service';

@Component({
    selector: 'app-summary-page',
    templateUrl: './summary-page.component.html',
    styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent implements OnInit {
    public transactions: Transaction[] = [];
    public transactionTypeCards: TransactionView[] = [];

    constructor(private transactionService: TransactionService) {
    }

    public ngOnInit() {
        this.getTransactions();
    }

    private getTransactions(): void {
        this.transactionService.getTransactions()
            .subscribe((transactions) => {
                this.transactions = transactions;
                this.getTransactionType();
            });
    }

    private getTransactionType(): void {
        const typesMap = this.transactions.reduce((acc, curr) => {
            acc[curr.type] = (acc[curr.type] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        this.transactionTypeCards = Object.keys(typesMap).map((type) => ({
            type,
            count: typesMap[type],
        }));
    }
}
