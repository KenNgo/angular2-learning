import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

	private timoutTimer: any;

	constructor (private _router: Router) {
		setTimeout(function(){
			_router.navigate(['/login']);
		}, 15000);
	}

}
