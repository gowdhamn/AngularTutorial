import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import { ListexampleComponent } from './Modules/ApiForms/listexample/listexample.component';
import { PostexampleComponent } from './Modules/ApiForms/postexample/postexample.component';
import { UpdateexampleComponent } from './Modules/ApiForms/updateexample/updateexample.component';
import { Rfexample2Component } from './Modules/ReactiveForms/rfexample2/rfexample2.component';
import { Rfexmaple1Component } from './Modules/ReactiveForms/rfexmaple1/rfexmaple1.component';

// DEMO PAGES

// Dashboards

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads
      {path: '', component: Rfexmaple1Component, data: {extraParameter: 'dashboardsMenu'}},
      {path: 'reactiveform-example1', component: Rfexmaple1Component, data: {extraParameter: 'dashboardsMenu'}},
      {path: 'reactiveform-example2', component: Rfexample2Component , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'postexample', component: PostexampleComponent , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'listexample', component: ListexampleComponent , data: {extraParameter: 'dashboardsMenu'}},
      {path: 'updateexample/:id', component: UpdateexampleComponent , data: {extraParameter: 'dashboardsMenu'}}

    ]

  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
