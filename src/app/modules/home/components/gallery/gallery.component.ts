import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

	image1: string = '../../../../../assets/images/Product 1.png';
	image2: string = '../../../../../assets/images/Product 2.png';
	image3: string = '../../../../../assets/images/Product 3.png';
}
