import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UtilService {


  constructor() { }

  addAnimation(cards:HTMLElement[]){
    let animationDelay = 0.15;
    console.log(cards)
    for(let i = 0; i< cards.length; i++){
        cards[i].style.animationDelay = animationDelay + 's';
        animationDelay += 0.15;
      }
    }
    /*cards.forEach((card:HTMLElement) => {
      if(card instanceof HTMLElement){
        //card.style.animation = animationFrame + '0.6s ease forwards';
        card.style.animationDelay = animationDelay + 's';
        animationDelay += 0.15;
      }
      
    })
    console.log(cards)*/
    
  


}
