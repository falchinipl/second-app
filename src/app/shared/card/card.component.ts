import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() 
  cardModel!: TemplateRef<any>;

  @Output()
  stepCards: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit(){
    this.stepCards.emit(this.cardModel.elementRef.nativeElement.nextSibling.childNodes[0]?.children);
  }
 

}
