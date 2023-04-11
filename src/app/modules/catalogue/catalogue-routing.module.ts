import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'products',
				component: CatalogueComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CatalogueRoutingModule { }
