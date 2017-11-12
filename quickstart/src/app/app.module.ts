import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { PageNotFoundComponent } from  './components/NotFound/NotFound.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'product', component: ProductComponent },
	{ path: 'inventory', component: InventoryComponent },
	{ path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent, ProductComponent, InventoryComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
