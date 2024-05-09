import { Component, Input } from '@angular/core';
import { Gif, Pagination } from '../../interfaces/home/gifs,interfaces';


@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = []

  @Input()
  public pagination!: Pagination

}
