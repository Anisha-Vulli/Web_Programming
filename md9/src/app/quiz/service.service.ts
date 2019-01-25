import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  list: Data = new Data();

  getList() {
    return this.list.Data;
  }
  constructor() { }
}
