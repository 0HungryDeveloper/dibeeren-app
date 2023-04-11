import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'products',
				component: CatalogueComponent
			},
			{
				path: ':id/product',
				component: ProductViewComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CatalogueRoutingModule { }
