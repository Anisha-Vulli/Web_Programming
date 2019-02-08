import { Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id : any;
  completeData : any;
  allIds:any;
  allproducts:any =[];
  
 
  constructor(private userService : UserService,private router: Router, private route : ActivatedRoute) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getcartproducts(this.id).subscribe((data)=>{
      this.completeData = data;
      console.log(data);
      this.allIds = this.completeData.cart;
      for(let i = 0;i<this.allIds.length;i++){
        this.allproducts.push(this.allIds[i]);
        // this.userService.getproduct(this.allIds[i]).subscribe((data)=>{
        //   this.allproducts.push(data)
        // });
      }
      console.log(this.allIds);
      console.log(this.allproducts);
    });
    
  }
 }
