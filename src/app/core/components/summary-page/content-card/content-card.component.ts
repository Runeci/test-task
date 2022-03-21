import { ActivatedRoute, Router } from '@angular/router';

import { Component, Input } from '@angular/core';
import { TransactionView } from '../../../shared/data.typing';

@Component({
    selector: 'app-content-card',
    templateUrl: './content-card.component.html',
    styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
    @Input() public transactionCard!: TransactionView;
    @Input() public tabNum!: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        ) {
    }

    public goToTab(tab: number): void {
        this.router.navigate(['/navigator'], {
            relativeTo: this.route,
            queryParams: { tab: `${tab}` },
        });
    }
}
