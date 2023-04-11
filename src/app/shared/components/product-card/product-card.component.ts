import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

	straberry: string = 'https://firebasestorage.googleapis.com/v0/b/dibeeren-9d539.appspot.com/o/products%2Fdummy_product.png?alt=media&token=796b95d7-447d-494f-854b-f96a9a211094';
}
