import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FrequenAskedQuestionsComponent } from './components/frequen-asked-questions/frequen-asked-questions.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MoreInformationComponent } from './components/more-information/more-information.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
	declarations: [
		HomeComponent,
		FrequenAskedQuestionsComponent,
		GalleryComponent,
		ListProductsComponent,
		MoreInformationComponent,
		SliderComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule
	]
})
export class HomeModule { }
