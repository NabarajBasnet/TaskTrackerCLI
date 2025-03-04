# Task Manager CLI

A simple Node.js command-line application to manage your tasks.  
Tasks are stored in a JSON file (`taskdb.json`) and can be added, updated, deleted, or filtered by their status.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/NabarajBasnet/TaskTrackerCLI.git
Navigate to the project directory:
bash
Copy
Edit
cd TaskTrackerCLI
Install any dependencies (if applicable):
bash
Copy
Edit
npm install
Usage
Run the application using Node.js along with the command and its parameters:

bash
Copy
Edit
node index.js <command> [parameters...]
Available Commands
add
Adds a new task with the given description.
Example:

bash
Copy
Edit
node index.js add "Learn React Native"
Output:

arduino
Copy
Edit
Adding task: Learn React Native
Task added!
update
Updates the description of an existing task identified by its index.
Example:

bash
Copy
Edit
node index.js update 0 "Learn Node.js"
Output:

arduino
Copy
Edit
[Task details] description updated!
delete
Deletes a task by its index.
Example:

bash
Copy
Edit
node index.js delete 0
Output:

arduino
Copy
Edit
Task deleted
mark-in-progress
Marks a task as "in-progress" by its index.
Example:

bash
Copy
Edit
node index.js mark-in-progress 0
Output:

scss
Copy
Edit
Marked in progress
mark-done
Marks a task as "done" by its index.
Example:

bash
Copy
Edit
node index.js mark-done 0
Output:

bash
Copy
Edit
Marked done
list
Lists all tasks.
Example:

bash
Copy
Edit
node index.js list
Output:

json
Copy
Edit
[
  {
    "id": "1627849273845",
    "description": "Learn React Native",
    "status": "todo",
    "createdAt": "2021-08-01T12:34:56.789Z",
    "updatedAt": "2021-08-01T12:34:56.789Z"
  },
  ...
]
list done
Lists only tasks with the status done.
Example:

bash
Copy
Edit
node index.js list done
list in-progress
Lists only tasks with the status in-progress.
Example:

bash
Copy
Edit
node index.js list in-progress
list todo
Lists only tasks with the status todo.
Example:

bash
Copy
Edit
node index.js list todo
Data Storage
All tasks are stored in the taskdb.json file in the project directory.
The file is automatically created and updated as you add, update, or delete tasks.
Error Handling
If an invalid command is entered, the application prints "Invalid command" and displays the current list of tasks.
Make sure to include the required parameters for each command. For example, the add command requires a task description, while update requires both the task index and the new description.
License
MIT License

Happy task managing!

yaml
Copy
Edit

---

Feel free to modify the examples and descriptions to better suit your needs.