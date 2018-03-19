import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
    // Accessing DOM Element
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
    todoLists: Array<any>;    
    authorList: Array<any> = ['Aadesh', 'Bhumika', 'Rohit', 'Meven', 'Li'];

    constructor() { }

    ngOnInit() {
        // Get TODO Lists from JSON File and Display it
        this.todoLists = require('../../todoLists.json');
        for(let item of this.todoLists) {
            item["id"] = Math.floor(Math.random() * 100000000);
        }
    }

    // Function called on add/update TODO Item
    saveTodoList() {
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

    // Delete TODO Item
    deleteTodoItem(id) {
        let i = 0;
        for (let arr of this.todoLists) {
            if (arr.id == id) {
                this.todoLists.splice(i, 1);
            }
            i++;
        }
    }

    // Update TODO Item
    updateTodoItem(todo) {

        this.id = todo.id;
        this.title = todo.title;
        this.todoItem = todo.todoItem;
        this.author = todo.author;
        this.date = todo.date;
    }

}
