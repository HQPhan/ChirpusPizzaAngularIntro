import { Component, OnInit } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];
  constructor(){}
  ngOnInit(){
  this.items = [
    {Item:"Pizza", Category:"dinner", Price: 18.99},
    {Item:"Chicken Wings", Category:"dinner", Price: 10.99},
    {Item:"Chicken Fingers", Category:"sides", Price: 9.99},
    {Item:"Cheesey Breadsticks", Category:"sides", Price: 7.99},
    {Item:"Caesar Salad", Category:"salad", Price: 8.99},
    {Item:"House Salad", Category:"salad", Price: 8.99},
    {Item:"Cinnamon Roll", Category:"dessert", Price: 5.99},
    {Item:"Chocolate Chip Cookie", Category:"dessert", Price: 5.99},
  ];
  }
}
