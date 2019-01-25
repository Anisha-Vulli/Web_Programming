import { Component, OnInit, Input } from '@angular/core';

import { ServiceService } from '../service.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  fullDetails: any;
  @Input() index;
  @Input() question;
  crct: boolean = null;
  wrng: boolean = null;
  index_of_ques: number;
  status: string;

  constructor(private list_of: ServiceService) {
  }
  validation(opt_index) {
    console.log(this.fullDetails[this.index].crctans);
    if (this.fullDetails[this.index].crctans === opt_index) {
      this.crct = true;
    } else {
      this.wrng = true;
    }
    this.status = 'disabled';
  }

  ngOnInit() {
    this.getData();
    // console.log(this.fullDetails);
  }

  getData(): void {
    this.fullDetails = this.list_of.getList();
  }

}
