import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	message:object = {
		title: '¡Bien hecho!',
		content: 'Este texto esta siendo comunicado desde el componente Padre al Hijo @Input de la aplicación!.'
	}

	getSend(e){
		alert(e);
	}

}
