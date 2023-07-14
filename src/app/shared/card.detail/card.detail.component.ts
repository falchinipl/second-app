import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-detail',
  templateUrl: './card.detail.component.html',
  styleUrls: ['./card.detail.component.scss']
})


export class CardDetailComponent {
@Input()
nome: string | undefined = "";

@Input()
cognome: string | undefined = "";

@Input()
nick: string | undefined = "";

@Input()
punti: string | undefined = "";

}
