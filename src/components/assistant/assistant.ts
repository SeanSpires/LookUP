import { Component } from '@angular/core';

/**
 * Generated class for the AssistantComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'assistant',
  templateUrl: 'assistant.html'
})
export class AssistantComponent {

  text: string;

  constructor() {
    console.log('Hello AssistantComponent Component');
    this.text = 'Hello World';
  }

}
