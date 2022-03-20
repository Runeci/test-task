import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TRANSACTIONS } from '../mocks/model';
import { Transaction } from '../shared/data.typing';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    public getTransactions(): Observable<Transaction[]> {
        return of(TRANSACTIONS);
    }
}
