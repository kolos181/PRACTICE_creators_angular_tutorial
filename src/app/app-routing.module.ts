import {NgModule} from '@angular/core';
import {CreatorsComponent} from './components/creators/creators.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CreatorDetailComponent} from './components/creator-detail/creator-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'creators', component: CreatorsComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: CreatorDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
