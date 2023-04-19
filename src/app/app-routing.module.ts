import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '', loadChildren: () =>
			import('../app/modules/home/home.module').then(
				m => m.HomeModule
			)
	},
	{
		path: 'catalog', loadChildren: () =>
			import('../app/modules/catalogue/catalogue.module').then(
				m => m.CatalogueModule
			)
	},
	{
		path: 'cart', loadChildren: () =>
		import('../app/modules/cart/cart.module').then
		(
			m => m.CartModule
		)
	},
	{
		path: 'delivery-information', loadChildren: () =>
		import('../app/modules/delivery/delivery.module').then
		(
			m => m.DeliveryModule
		)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
