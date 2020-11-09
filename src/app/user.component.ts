import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>I am the user component</p>
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <p>Hello {{ name }}</p>
    <p>Two way binding</p>
    <input type="text" [(ngModel)]="surname">
    <p>Hello Mr. {{ surname }}</p>
    <p>Emitting events</p>
    <input type="text" (input)="onNicknameInput($event)" [value]="nickname">
    <p>Nickname {{ nickname }}</p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  // 'Tarun' will be overridden by the input which is coming from the app component html
  @Input() name = 'Tarun';
  surname = 'Lohani';
  nickname = 'Blackdeath'
  @Output() nameChanged = new EventEmitter<string>();
  onUserInput(event) {
    this.name = event.target.value
  }

  onNicknameInput(event) {
    this.nameChanged.emit(event.target.value);
  }
}
