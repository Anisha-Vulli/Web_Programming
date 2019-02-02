import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  comments: any;

  constructor(private serobj: ServiceService) {
   }

  ngOnInit() {
    this.comments = this.serobj.getcomments();
  }

}
