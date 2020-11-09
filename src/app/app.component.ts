import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  nickname = 'Blackdeath'
  onNicknameChanged(newName) {
    this.nickname = newName
  }
}
