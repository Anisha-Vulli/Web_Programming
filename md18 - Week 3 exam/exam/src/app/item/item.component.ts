import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  products: any;
  index: any;
  display: any;

  constructor(private obj: ServiceService) {
   }

  ngOnInit() {
    this.display = 'none';
    this.products = this.obj.getItems();
    console.log(this.products);
  }

  delete(index: any) {
    this.obj.remove(index);
  }

}
