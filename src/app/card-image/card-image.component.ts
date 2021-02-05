import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass']
})
export class CardImageComponent {
  @Input() public alt: string = '';
  @Input() public image: string = '';
  @Input() public title: string = '';
  @Input() public sizes: any[] = [];

}
