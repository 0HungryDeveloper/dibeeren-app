import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucctions',
  templateUrl: './instrucctions.component.html',
  styleUrls: ['./instrucctions.component.scss']
})
export class InstrucctionsComponent {

	constructor(private router: Router) { }

	onKeepBuying() {
		this.router.navigate([`/catalog/products`]);
	}
}
