import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

	@ViewChild('navbarToggler') navbarToggler!: ElementRef;

	constructor(private router: Router) {}

	closeNavbar() {
	  if (this.navbarToggler.nativeElement.offsetParent !== null) {
		this.navbarToggler.nativeElement.click();
	  }
	}

	navigateTo(route: string) {
		this.router.navigate([route]);
		this.closeNavbar();
	}

}
