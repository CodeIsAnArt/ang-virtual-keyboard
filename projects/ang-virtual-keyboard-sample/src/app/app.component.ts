import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputString = '';
  reactiveControl = new FormControl('');

  constructor(

  ) { }

  valueChange(e: string) {
    console.log(e);
    this.reactiveControl.setValue(e);
  }
}
