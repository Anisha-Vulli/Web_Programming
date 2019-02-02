import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: any;
  pwd: any;
  comment: any;

  key = '123456789';
  comments: any;

  succstyle: any;
  fillstyle: any;
  pwdstyle: any;

  constructor(private serobj: ServiceService) {
  }

  ngOnInit() {
    this.succstyle = 'none';
    this.fillstyle = 'none';
    this.pwdstyle = 'none';
  }

  post() {
    if (this.check()) {
      console.log(this.comment);
      this.comments = {
        'name': this.name,
        'comment': this.comment,
      };
      this.serobj.addComments(this.comments);
    }

  }

  check() {
    if (this.name === '' || this.pwd === '' || this.comment === '') {
      this.fillstyle = 'block';
      this.succstyle = 'none';
      this.pwdstyle = 'none';
      return false;
    } else if (this.pwd !== this.key) {
      this.succstyle = 'none';
      this.pwdstyle = 'block';
      this.fillstyle = 'none';
      return false;
    } else {
      this.succstyle = 'block';
      this.pwdstyle = 'none';
      this.fillstyle = 'none';
      return true;
    }
  }

}
