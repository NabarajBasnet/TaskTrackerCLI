const fs = require('fs');


// // Commands a user should give
// // list tasks = This command will show all tasks in file
// const list_tasks_cmd = process.argv[2].toString() === 'list' && process.argv[3].toString() === 'tasks' ? 'list' : 'Invalid list tasks command!';

// // tasks done = This command will show all tasks with status done
// const list_done_tasks = process.argv[2].toString() === 'tasks' && process.argv[3].toString() === 'done' ? 'tasks done' : 'Invalid tasks done command';

// // tasks inprogress = This command will show all tasks with status inprogress
// const list_inprogress_tasks = process.argv[2].toString() === 'tasks' && process.argv[3].toString() === 'inprogress' ? 'tasks inprogress' : 'Invalid tasks in-progress command';

// // list task = This command will show one task
// const list_task = process.argv[2].toString() === 'task' ? 'task' : 'Invalid task command';

// // These commands will be used for marking task status with inprogress and done
// // mark-in-progress 1
// // mark-done 1

// const mark_inprogress = process.argv[2].toString() === 'mark-in-progress' ? 'mark-in-progress' : '';
// const mark_done = process.argv[2].toString() === 'mark-done' ? 'mark-done' : '';

// // Add new task command
// const add_new_task = process.argv[2].toString() === 'add' && process.argv[3].toString() ? 'add-new-task' : 'Please add some task';

// // Update task and delete task
// const update_task = process.argv[2].toString() === 'update' && process.argv[3].toString() && process.argv[4].toString() ? 'update-task' : 'Update task command invalid';
// const delete_task = process.argv[2].toString() === 'delete' && process.argv[3].toString() ? 'delete-task' : 'Delete task command invalid';



// Functions to work with data
// List all tasks
// This function will show all the tasks available in file

const showTasks = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            if (err && !data) {
                console.log(err.stack);
            };
            let tasks = [];

            const parsedJsonData = JSON.parse(data);
            if (!Array.isArray(parsedJsonData)) {
                tasks.push(parsedJsonData);
                fs.writeFile('./taskdb.json', JSON.stringify(tasks), (err) => {
                    if (err) {
                        console.log('Err: ', err.stack);
                    };
                });
            };
        });
    } catch (err) {
        console.log('Error: ', err.message);
    };
};

showTasks();


// Add new task function
const addNewTask = (newData) => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = [];

            if (err && !data) {
                console.log('Error: ', err.stack);
                throw new Error(err);
            };

            if (!Array.isArray(JSON.parse(data))) {
                tasks.push(JSON.parse(data));
                fs.writeFile('./taskdb.json', JSON.stringify(tasks), (err) => {
                    if (err) {
                        console.log('Error: ', err.stack);
                        throw new Error(err);
                    };
                });
            };

            tasks.push(...JSON.parse(data), newData);
            fs.writeFile('./taskdb.json', JSON.stringify(tasks), (err) => {
                if (err) {
                    console.log('Err: ', err.stack);
                    throw new Error(err);
                };
            });
            console.log(`${tasks} saved!`);
        });
    } catch (err) {
        console.log(err);
    };
};

addNewTask({ 'DB': "SQL" });
