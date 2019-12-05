import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

	@Input() message;
	@Output() send = new EventEmitter<string>();

	messageChild = 'Evento disparado desde el componente Hijo al Padre @Output!.';

	constructor() { }

	ngOnInit() {
	}

	actionEvent() {
		this.send.emit(this.messageChild);
	}

}
