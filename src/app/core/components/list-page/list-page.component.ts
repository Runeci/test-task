import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../shared/data.typing';

export interface TransactionInfo {
    name: string,
    company: string,
    amount: string,
    type: string,
}

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss'],
})

export class ListPageComponent implements OnInit {
    public transactions: Transaction[] = [];
    public transactionInfo: TransactionInfo[] = [];
    public transactionType: string[] = [];
    public currentTab!: number;

    constructor(
        private transactionService: TransactionService,
        private route: ActivatedRoute,
    ) {}

    public ngOnInit() {
        this.getTransactions();
        this.getTransactionInfo(this.transactionType[Number(this.currentTab)]);
    }

    private getTransactions(): void {
        this.route.queryParamMap
            .subscribe((params) => {
                this.currentTab = Number(params.get('tab'));
                this.getTransactionInfo(this.transactionType[Number(this.currentTab)]);
            });
        this.transactionService.getTransactions()
            .subscribe((transactions) => {
                this.transactions = transactions;
                this.getTransactionType();
                this.getTransactionInfo(this.transactionType[Number(this.currentTab)]);
            });
    }

    private getTransactionInfo(type: string): void {
        this.transactionInfo = this.transactions
            .map((item) => ({
            amount: item.amount,
            type: item.type,
            company: item.company,
            name: `${item.name.first} ${item.name.last}`,
        }))
            .filter((i) => i.type === type);
    }

    private getTransactionType(): void {
        this.transactionType = [...new Set(this.transactions
            .map((transaction) => transaction.type))];
    }
}
