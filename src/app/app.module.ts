import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgReduxModule} from '@angular-redux/store';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {rootReducer, ArchitectUIState} from './ThemeOptions/store';
import {ConfigActions} from './ThemeOptions/store/config.actions';
import {AppRoutingModule} from './app-routing.module';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {ChartsModule} from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// LAYOUT

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';
import {PageTitleComponent} from './Layout/Components/page-title/page-title.component';

// HEADER

import {HeaderComponent} from './Layout/Components/header/header.component';
import {SearchBoxComponent} from './Layout/Components/header/elements/search-box/search-box.component';
import {UserBoxComponent} from './Layout/Components/header/elements/user-box/user-box.component';

// SIDEBAR

import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';
import {LogoComponent} from './Layout/Components/sidebar/elements/logo/logo.component';

import { Rfexmaple1Component } from './Modules/ReactiveForms/rfexmaple1/rfexmaple1.component';
import { Rfexample2Component } from './Modules/ReactiveForms/rfexample2/rfexample2.component';
import { PostexampleComponent } from './Modules/ApiForms/postexample/postexample.component';
import { ListexampleComponent } from './Modules/ApiForms/listexample/listexample.component';
import { UpdateexampleComponent } from './Modules/ApiForms/updateexample/updateexample.component';
import { ReadtextboxinputComponent } from './Modules/FormInputs/readtextboxinput/readtextboxinput.component';
import { DefaultfocusComponent } from './Modules/FormInputs/defaultfocus/defaultfocus.component';
import { MaterialModule } from './material-module';
import { PassDatatoDialogComponent } from './Modules/FormInputs/pass-datato-dialog/pass-datato-dialog.component';
import { ExampleDialogComponent } from './Modules/FormInputs/pass-datato-dialog/example-dialog/example-dialog.component';

import {TableModule} from 'primeng/table';
import { DatatableexampleComponent } from './Modules/primengcomponents/datatableexample/datatableexample.component';

// DEMO PAGES

// Dashboards


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [

    // LAYOUT
    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,

    // HEADER
    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,

    // SIDEBAR
    SidebarComponent,
    LogoComponent,

    // Module Component
    Rfexmaple1Component,
    Rfexample2Component,
    PostexampleComponent,
    ListexampleComponent,
    UpdateexampleComponent,
    ReadtextboxinputComponent,
    DefaultfocusComponent,
    PassDatatoDialogComponent,
    ExampleDialogComponent,
    DatatableexampleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,

    // Angular Bootstrap Components

    PerfectScrollbarModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Charts

    ChartsModule,
    MaterialModule,
    TableModule
  ],
  providers: [
    {
      provide:
      PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
      DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
              private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
