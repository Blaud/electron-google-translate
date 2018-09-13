import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

const translator = require('google-translator');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('textToTranslate') textToTranslateRef: ElementRef;

  translated = 'translated text here';

  constructor() {
  }

  ngOnInit() {
  }

  textInput(event: Event) {
    if (this.textToTranslateRef.nativeElement.value.length > 0) {
      translator('en', 'ru', this.textToTranslateRef.nativeElement.value, response => {
        this.translated = response.text;
      });
    } else {
      this.translated = '';
    }
  }
}
