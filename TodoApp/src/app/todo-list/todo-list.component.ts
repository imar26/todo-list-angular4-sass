import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  mainHeader: string = "Welcome to TechCrat's Todo List";
  leftTitle: string = "List of Todo Items";
  rightTitle: string = "Add/Update Todo Item";
  todoLists: Array<any> = [
    {
        "title": "Cooking",
        "todoItem": "Cook food for 8 people",
        "author": "Aadesh",
        "date": "2018-02-12"
    },
    {
        "title": "Grocery",
        "todoItem": "Get Milk and Bread",
        "author": "Bhumika",
        "date": "2018-02-13"
    },
    {
        "title": "Cleaning",
        "todoItem": "Kitchen area and bathtub",
        "author": "Aadesh",
        "date": "2018-02-14"
    },
    {
        "title": "Laundry",
        "todoItem": "Take the bedsheets and curtains",
        "author": "Bhumika",
        "date": "2018-02-15"
    },
    {
        "title": "Bills",
        "todoItem": "Pay the electricity and Wi-fi bills",
        "author": "Bhumika",
        "date": "2018-02-16"
    }
];
authorList : Array<any> = ['Aadesh', 'Bhumika', 'Rohit', 'Meven', 'Li'];
  constructor() { }

  ngOnInit() {
    
  }

}
