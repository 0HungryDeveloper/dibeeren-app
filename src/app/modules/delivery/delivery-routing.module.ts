import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';

const routes: Routes = [
	{
		path: '',
		component: DeliveryFormComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DeliveryRoutingModule { }
