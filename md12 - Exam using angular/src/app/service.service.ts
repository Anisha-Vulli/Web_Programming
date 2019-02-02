import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  comments = [];

  constructor() { }

  addComments(text: any) {
    this.comments.unshift(text);
    console.log(this.comments);
  }

  getcomments() {
    return this.comments;
  }
}
