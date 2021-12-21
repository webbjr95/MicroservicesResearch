import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfigurationService } from './services/configuration.service';
import { MatTableModule } from '@angular/material/table';
import { InvoiceListComponent } from './invoices/invoice-list.component';
import { OrderListComponent } from './orders/order-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';


function configurationInitializer(handler: HttpBackend, configurationService: ConfigurationService) {
  return () => configurationService.loadConfiguration(handler).toPromise().then()
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceListComponent,
    LoadingSpinnerComponent,
    NavMenuComponent,
    OrderListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'invoices', component: InvoiceListComponent, pathMatch: 'full' },
      { path: 'orders', component: OrderListComponent, pathMatch: 'full' }
    ]),
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: configurationInitializer, deps: [HttpBackend, ConfigurationService], multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }