// Commands a user should give
// list tasks = This command will show all todos in file
const list_todos_cmd = process.argv[2].toString() === 'list' && process.argv[3].toString() === 'todos' ? 'list' : 'Invalid list todos command!';

// todos done = This command will show all todos with status done
const list_done_todos = process.argv[2].toString() === 'todos' && process.argv[3].toString() === 'done' ? 'todos done' : 'Invalid todos done command';

// todos inprogress = This command will show all todos with status inprogress
const list_inprogress_todos = process.argv[2].toString() === 'todos' && process.argv[3].toString() === 'inprogress' ? 'todos inprogress' : 'Invalid todos in-progress command';

// list todo = This command will show one todo
const list_todo = process.argv[2].toString() === 'todo' ? 'todd' : 'Invalid todo command';

// These commands will used for marking todos status with inprogress and done
// mark-in-progress 1
// mark-done 1

const mark_inprogress = process.argv[2].toString() === 'mark-in-progress' ? 'mark-in-progress' : '';
const mark_done = process.argv[2].toString() === 'mark-done' ? 'mark-done' : '';

// Add new task command
const add_new_todo = process.argv[2].toString() === 'add' && process.argv[3].toString() ? 'add-new-todo' : 'Please add some task';

// Update todo and delete todo
const update_todo = process.argv[2].toString() === 'update' && process.argv[3].toString() && process.argv[4].toString() ? 'update-todo' : 'Update todo command invalid';
const delete_todo = process.argv[2].toString() === 'delete' && process.argv[3].toString() ? 'delete-todo' : 'Delete todo command invalid';
