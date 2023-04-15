import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { SharedModule } from '@shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ProductsLoaderComponent } from './components/products-loader/products-loader.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { OtherProductsComponent } from './components/other-products/other-products.component';
import { LoadProductViewComponent } from './components/load-product-view/load-product-view.component';


@NgModule({
	declarations: [
		CatalogueComponent,
		CategoryFilterPipe,
  SearchFilterPipe,
  ProductsLoaderComponent,
  ProductViewComponent,
  OtherProductsComponent,
  LoadProductViewComponent
	],
	imports: [
		CommonModule,
		CatalogueRoutingModule,
		SharedModule,
		NgxPaginationModule
	]
})
export class CatalogueModule { }
