import { Component } from '@angular/core';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

	image1: string = 'https://via.placeholder.com/600x700.png/A5B5C8/fff';
	image2: string = 'https://via.placeholder.com/600x340.png/A5B5C8/fff';
	image3: string = 'https://via.placeholder.com/600x340.png/A5B5C8/fff';
}
