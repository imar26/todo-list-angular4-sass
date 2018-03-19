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
    clicked: string;
    id: any;
    title: string;
    todoItem: string;
    author: string;
    date: any;
    addItem: boolean;
    updateItem: boolean;
    success: string;
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
        this.todoForm.value.author = "Aadesh";
    }

    // Function called on add/update TODO Item
    saveTodoList() {
        if(this.todoForm.value.id) {
            this.id = this.todoForm.value.id;
        } else {
            this.id = Math.floor(Math.random() * 100000000);
        }
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
        this.todoForm.reset();
        if(this.todoForm.value.id) {
            this.updateItem = true;
            this.success = "TODO Item update successfully.";
            let timeoutId = setTimeout(() => {
                this.updateItem = false;
            }, 2500);
            clearTimeout(timeoutId);
        } else {
            this.addItem = true;
            this.success = "TODO Item added successfully.";
            let timeoutId = setTimeout(() => {
                this.addItem = false;
            }, 2500);
            clearTimeout(timeoutId);
        }
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
