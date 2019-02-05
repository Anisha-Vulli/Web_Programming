import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  @Input() index: any;
  display: any = 'none';
  parameter: any;
  text: any;
  data: any;
  parval: any;
  txtval: any;

  constructor(private obj: ServiceService) { }

  ngOnInit() {
    console.log(this.index);
  }

  edit(event: Event) {
    this.display = 'block';
    const elementId: string = (event.target as Element).id;
    this.obj.edit(elementId);
  }

  submit(){
    this.data = {
      'parameter': this.parameter,
      'text': this.text,
    };
    this.obj.change(this.data);
    this.parval = '';
    this.txtval = '';
    this.display = 'none';
  }
}
