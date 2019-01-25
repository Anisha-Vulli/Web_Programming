import { Component, OnInit, Input } from '@angular/core';
// import { Data } from '../../data';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
  @Input() hints;
  hintindex: number;
  maxlen: number;
  rightDisplay: string;
  leftDisplay: string;
  display: string;
  constructor() {
    this.hintindex = 0;
    this.maxlen = 0;
    this.display = 'none';
    this.rightDisplay = 'block';
    this.leftDisplay = 'none';
  }

  ngOnInit() {
    console.log(typeof this.hints);
    console.log(this.maxlen);
  }

  Previous() {
    this.hintindex--;
    if (this.hintindex === 0) {
      this.leftDisplay = 'none';
      this.rightDisplay = 'block';
    }
    if (this.hintindex < 1 && this.hintindex !== 0) {
      this.rightDisplay = 'block';
    }
  }

  Next() {
    this.hintindex++;
    this.leftDisplay = 'block';
    if (this.hintindex === 1) {
      this.rightDisplay = 'none';
    }
  }

  display_func() {
    this.display = 'block';
  }

}
