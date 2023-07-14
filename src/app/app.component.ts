import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router,private location: PlatformLocation){

  }

ngOnInit(){
  
  this.router.navigate(['']);
}

}
