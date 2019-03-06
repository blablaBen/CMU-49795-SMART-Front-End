import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopperQueryComponent } from './shopper/shopper-query/shopper-query.component';

const appRoutes: Routes = [
  { path: 'shopper/shopper-query', component: ShopperQueryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShopperQueryComponent,
    ShopperQueryComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
