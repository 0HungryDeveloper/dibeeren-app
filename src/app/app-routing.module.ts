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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
