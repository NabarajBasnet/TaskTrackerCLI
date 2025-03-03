
// Commands a user should give
// list tasks = This command will show all todos in file
const list_todos_cmd = process.argv[2].toString() === 'list' && process.argv[3].toString() === 'todos' ? 'list tasks' : 'invalid list todos command!';
console.log('CMD: ', list_todos_cmd);
// todos done = This command will show all todos with status done