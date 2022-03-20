import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './core/components/list-page/list-page.component';
import { SummaryPageComponent } from './core/components/summary-page/summary-page.component';

const routes: Routes = [
    { path: 'navigator', component: ListPageComponent },
    { path: '', component: SummaryPageComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
