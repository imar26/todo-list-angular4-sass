import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    @ViewChild('f') todoForm: NgForm;

    //properties
    id: any;
    title: string;
    todoItem: string;
    author: string;
    date: any;

    mainHeader: string = "Welcome to TechCrat's Todo List";
    leftTitle: string = "List of Todo Items";
    rightTitle: string = "Add/Update Todo Item";
    todoLists: Array<any> = [
        {
            "id": Math.floor(Math.random() * 100000000),
            "title": "Cooking",
            "todoItem": "Cook food for 8 people",
            "author": "Aadesh",
            "date": "2018-02-12"
        },
        {
            "id": Math.floor(Math.random() * 100000000),
            "title": "Grocery",
            "todoItem": "Get Milk and Bread",
            "author": "Bhumika",
            "date": "2018-02-13"
        },
        {
            "id": Math.floor(Math.random() * 100000000),
            "title": "Cleaning",
            "todoItem": "Kitchen area and bathtub",
            "author": "Aadesh",
            "date": "2018-02-14"
        },
        {
            "id": Math.floor(Math.random() * 100000000),
            "title": "Laundry",
            "todoItem": "Take the bedsheets and curtains",
            "author": "Bhumika",
            "date": "2018-02-15"
        },
        {
            "id": Math.floor(Math.random() * 100000000),
            "title": "Bills",
            "todoItem": "Pay the electricity and Wi-fi bills",
            "author": "Bhumika",
            "date": "2018-02-16"
        }
    ];
    authorList: Array<any> = ['Aadesh', 'Bhumika', 'Rohit', 'Meven', 'Li'];

    saveTodoList(){
        this.id = Math.floor(Math.random() * 100000000);
        this.title = this.todoForm.value.title;
        this.todoItem = this.todoForm.value.todoItem;
        this.author = this.todoForm.value.author;
        this.date = this.todoForm.value.date;

        let todo = {
            "id": this.id,
            "title": this.title,
            "todoItem": this.todoItem,
            "author": this.author,
            "date": this.date

        }
        this.todoLists.push(todo);
    }
    deleteTodoItem(id){
        let i=0;
        for(let arr of this.todoLists){
           if(arr.id == id){
               this.todoLists.splice(i, 1);
           }
           i++;
        }
    }
    updateTodoItem(todo){
        
        this.id = todo.id;
        this.title = todo.title;
        this.todoItem = todo.todoItem;
        this.author = todo.author;
        this.date = todo.date;
    }
    constructor() { }

    ngOnInit() {

    }

}
