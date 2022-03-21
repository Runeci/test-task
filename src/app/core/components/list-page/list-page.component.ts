import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction, TransactionInfo } from '../../shared/data.typing';

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss'],
})

export class ListPageComponent implements OnInit {
    public transactions: Transaction[] = [];
    public transactionInfo: TransactionInfo[] = [];
    public transactionType: string[] = [];
    public currentTab: string = '';

    constructor(
        private transactionService: TransactionService,
        private route: ActivatedRoute,
    ) {
    }

    public ngOnInit() {
        this.getTransactions();
        this.getTransactionInfo(this.currentTab);
    }

    private getTransactions(): void {
        this.route.queryParamMap
            .subscribe((params) => {
                this.currentTab = params.get('tab') ?? '';
                this.getTransactionInfo(this.currentTab);
            });

        this.transactionService.getTransactions()
            .subscribe((transactions) => {
                this.transactions = transactions;
                this.getTransactionType();
                this.getTransactionInfo(this.currentTab);
            });
    }

    private getTransactionInfo(tab: string): void {
        this.transactionInfo = this.transactions
            .map((item) => ({
                amount: item.amount,
                type: item.type,
                company: item.company,
                name: `${item.name.first} ${item.name.last}`,
            }))
            .filter((i) => i.type === this.transactionType[parseInt(tab, 10)]);
    }

    private getTransactionType(): void {
        this.transactionType = [...new Set(this.transactions
            .map((transaction) => transaction.type))];
    }
}
