import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  fullDetails: any;

  constructor(private list_of: ServiceService) {
  }
  ngOnInit() {
    this.getData();
    // console.log(this.fullDetails);
  }

  getData(): void {
    this.fullDetails = this.list_of.getList();
  }

}
