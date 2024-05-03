#!/usr/bin/env node
//importing inquirer from inquirer
import inquirer from "inquirer";
// creating empty list to add elements 
let todos = [];
//while loop
let condition = true;
while (condition) {
    const res = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(res.todo);
    condition = res.addMore;
    console.log(todos);
}
