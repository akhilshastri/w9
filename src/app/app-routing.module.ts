import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './routes/dashboard/dashboard.component';
import {MyCustomersLibComponent} from "my-customers-lib";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customers', component: MyCustomersLibComponent},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
