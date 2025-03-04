# Task Manager CLI

A simple Node.js command-line application to manage your tasks.  
Tasks are stored in a JSON file (`taskdb.json`) and can be added, updated, deleted, or filtered by their status.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/NabarajBasnet/TaskTrackerCLI.git

## Command
node index.js <command> [parameters...]

## Example
for adding new task
node index.js add "Hello world!"

## Commands
node index.js list => show all tasks
ndoe index.js add "content" => add new task in file
node index.js delete 1 => delete task with index 1 or task array
node index.js update 1 'conent' => update task with index 1 in task array
node index.js list done => shows tasks with done status 
node index.js list in-progress => shows tasks with in-progress status 
node index.js list todo => shows tasks with todo status 
node index.js mark-in-progress 1 => change status of 1 indexed task
node index.js mark-done 1 => change status of 1 indexed task



