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
    todoId: any;
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
            item["todoId"] = Math.floor(Math.random() * 100000000);
        }
    }

    // Function called on add/update TODO Item
    saveTodoList() {
        this.title = this.todoForm.value.title;
        this.todoItem = this.todoForm.value.todoItem;
        this.author = this.todoForm.value.author;
        this.date = this.todoForm.value.date;
        if(this.todoForm.value.todoId) {
            this.todoId = this.todoForm.value.todoId;
            for(let item of this.todoLists) {
                if(item.todoId == this.todoId) {
                    item.title = this.title;
                    item.todoItem = this.todoItem;
                    item.author = this.author;
                    item.date = this.date;
                }
            }
            this.updateItem = true;
            this.success = "TODO Item updated successfully.";
            let timeoutId = setTimeout(() => {
                this.updateItem = false;
            }, 2000);
        } else {
            this.todoId = Math.floor(Math.random() * 100000000);
            let todo = {
                "todoId": this.todoId,
                "title": this.title,
                "todoItem": this.todoItem,
                "author": this.author,
                "date": this.date
            }
            this.todoLists.push(todo);
            this.addItem = true;
            this.success = "TODO Item added successfully.";
            let timeoutId = setTimeout(() => {
                this.addItem = false;
            }, 2000);
        }        
        this.todoForm.reset();
    }

    // Delete TODO Item
    deleteTodoItem(id) {
        let i = 0;
        for (let arr of this.todoLists) {
            if (arr.todoId == id) {
                this.todoLists.splice(i, 1);
            }
            i++;
        }
    }

    // Update TODO Item
    updateTodoItem(todo) {
        this.todoForm.setValue(todo);
    }

}
