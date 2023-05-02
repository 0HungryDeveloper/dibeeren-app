import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@ViewChild('navbarToggler') navbarToggler!: ElementRef;

	constructor(private router: Router) { }

	closeNavbar() {
		if (this.navbarToggler.nativeElement.offsetParent !== null) {
			this.navbarToggler.nativeElement.click();
		}
	}

	navigateTo(route: string) {
		this.router.navigate([route]);
		this.closeNavbar();
	}

	navigateToCart() {
		this.router.navigate(['cart']);
		console.log(this.navbarToggler.nativeElement.offsetParent === null)
		if (this.navbarToggler.nativeElement.offsetParent === null) {
			this.navbarToggler.nativeElement.click();
		}
	}

	ngOnInit(): void {
	}
}
