const fs = require('fs');

const showTasks = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = [];

            if (err && !data) {
                console.log(err.stack);
                fs.writeFile('./taskdb.json', JSON.stringify({}), (err) => {
                    if (err) {
                        console.log(err);
                    };
                });
            };

            const parsedJsonData = data ? JSON.parse(data) : [{}];
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

const addNewTask = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = [];

            let task = {
                id: '',
                description: '',
                status: null,
                createdAt: '',
                updatedAt: '',
            };

            if (err && !data) {
                console.log('Error: ', err.stack);
                throw new Error(err);
            };

            if (process.argv[2] === 'add' && process.argv[3]) {
                task.id = Date.now().toString();
                task.description = process.argv[3];
                task.status = 'todo';
                task.createdAt = new Date();
                task.updatedAt = new Date();
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

            tasks.push(...JSON.parse(data), task);
            fs.writeFile('./taskdb.json', JSON.stringify(tasks), (err) => {
                if (err) {
                    console.log('Err: ', err.stack);
                    throw new Error(err);
                };
            });
            console.log(`${task} task added!`);
        });


    } catch (err) {
        console.log(err);
    };
};

const updateTask = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = JSON.parse(data);

            if (err && !data) {
                console.log(err.stack);
            };
            if (process.argv[2] === 'update' && process.argv[3] && process.argv[4]) {
                tasks[process.argv[3]].description = process.argv[4];
                fs.writeFile('./taskdb.json', JSON.stringify(tasks), (err) => {
                    if (err) {
                        console.log('Err: ', err.stack);
                        throw new Error(err);
                    };
                });
                console.log(tasks[process.argv[3]], 'description updated!');
            };
        });
    } catch (err) {
        console.log('Err: ', err);
        throw new Error(err);
    };
};

const deleteTask = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = JSON.parse(data);

            if (err && !data) {
                console.log(err.stack);
            };

            if (process.argv[2] === 'delete' && process.argv[3]) {
                const selectedTaskId = tasks[process.argv[3]].id;
                if (!selectedTaskId) {
                    console.log('Task in not available in the index');
                };
                const filtered_tasks = tasks.filter(task => task.id !== selectedTaskId)
                fs.writeFile('./taskdb.json', JSON.stringify(filtered_tasks), (err) => {
                    if (err) { console.log(err.stack); }
                    console.log('Task deleted');
                });
            };
        });
    } catch (err) {
        console.log('Err: ', err);
    };
};

const markInprogress = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = JSON.parse(data);
            if (err && !data) {
                console.log('Error: ', err.stack);
            };

            if (process.argv[2] === 'mark-in-progress' && process.argv[3]) {
                const selectedTaskUpdate = tasks[process.argv[3]]
                selectedTaskUpdate.status = 'in-progress';
                tasks[process.argv[3]] = selectedTaskUpdate;
                fs.writeFile('./taskdb.json', JSON.stringify(tasks), (err) => {
                    if (err) {
                        console.log(err);
                    };
                    console.log('Marked in progress');
                });
            };
        });
    } catch (err) {
        console.log(err);
        throw new Error(err);
    };
};

const markDone = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = JSON.parse(data);
            if (err && !data) {
                console.log('Error: ', err.stack);
            };

            if (process.argv[2] === 'mark-done' && process.argv[3]) {
                const selectedTaskUpdate = tasks[process.argv[3]]
                selectedTaskUpdate.status = 'done';
                tasks[process.argv[3]] = selectedTaskUpdate;
                fs.writeFile('./taskdb.json', JSON.stringify(tasks), (err) => {
                    if (err) {
                        console.log(err);
                    };
                    console.log('Marked done');
                });
            };
        });
    } catch (err) {
        console.log(err);
        throw new Error(err);
    };
};

const listDoneTasks = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = JSON.parse(data);
            if (!data && err) {
                console.log('Error: ', err.stack);
            };
            if (process.argv[2] === 'list' && process.argv[3] === 'done') {
                const doneTasks = tasks.filter(task => task.status === 'done');
                if (!doneTasks) {
                    console.log('No tasks with that status');
                };
                console.log('Done tasks: ', doneTasks);
            };
        });
    } catch (err) {
        console.log(err);
    };
};

const listInProgressTasks = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = JSON.parse(data);
            if (!data && err) {
                console.log('Error: ', err.stack);
            };
            if (process.argv[2] === 'list' && process.argv[3] === 'in-progress') {
                const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
                if (!inProgressTasks) {
                    console.log('No tasks with that status');
                }
                console.log('In Progress Tasks: ', inProgressTasks);
            };
        });
    } catch (err) {
        console.log(err);
    };
};

const listStatusWithTodo = () => {
    try {
        fs.readFile('./taskdb.json', (err, data) => {
            let tasks = JSON.parse(data);
            if (!data && err) {
                console.log('Error: ', err.stack);
            };
            if (process.argv[2] === 'list' && process.argv[3] === 'todo') {
                const todoTasks = tasks.filter(task => task.status === 'todo');
                if (!todoTasks) {
                    console.log('No tasks with that status');
                }
                console.log('In Progress Tasks: ', todoTasks);
            };
        });
    } catch (err) {
        console.log(err);
    };
};

const mainFunction = () => {
    const command = process.argv[2]?.trim();

    const param1 = process.argv[3]?.trim();

    const param2 = process.argv[4]?.trim();

    switch (true) {
        case command === 'add' && param1 !== undefined:
            addNewTask(param1);
            break;
        case command === 'update' && param1 !== undefined && param2 !== undefined:
            updateTask(param1, param2);
            break;
        case command === 'delete' && param1 !== undefined:
            deleteTask(param1);
            break;
        case command === 'mark-in-progress' && param1 !== undefined:
            markInprogress(param1);
            break;
        case command === 'mark-done' && param1 !== undefined:
            markDone(param1);
            break;
        case command === 'list' && !param1:
            showTasks();
            break;
        case command === 'list' && param1 === 'done':
            listDoneTasks();
            break;
        case command === 'list' && param1 === 'in-progress':
            listInProgressTasks();
            break;
        case command === 'list' && param1 === 'todo':
            listStatusWithTodo();
            break;
        default:
            console.log("Invalid command");
            showTasks();
            break;
    }
};

mainFunction();
