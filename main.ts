#! /usr/bin/env node

//This is line is called shebang

import inquirer from "inquirer"


const answer :{
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the words"

    }
])

// use trim and split method  to remove white spaces in sentences

// trim remove white space start and end only
const word = answer.sentence.trim().split(" ");

console.log(word);

console.log(`Your sentence word count is  ${word.length}`);