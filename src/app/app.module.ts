import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './core/nav/nav.component';
import {DashboardComponent} from './routes/dashboard/dashboard.component';
import {MyCustomersLibModule} from 'my-customers-lib';
import {UrlHandlingStrategy} from '@angular/router';
import {routes} from './app-routing.module' ;


// https://blog.nrwl.io/upgrading-angular-applications-managing-routers-and-url-ca5588290aaa
// https://blog.angular-university.io/angular2-router/
class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    debugger;


    const routeFund = routes.find((rt) => {
      debugger;
      return rt.path ===  url.toString().split('/')[1] ;
    }) !== undefined;
    //    return routes.find((rt) => rt.path === url.toString()) !== undefined;
    return routeFund; // url.toString().startsWith('/dashboard') || url.toString() === '/';
  }

  extract(url) {
    return url;
  }

  merge(url, whole) {
    return url;
  }

  getBaseSegment(url) {
    return url ? url.split('/')[0] : '';
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MyCustomersLibModule,
    AppRoutingModule
  ],
  providers: [
    {provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
